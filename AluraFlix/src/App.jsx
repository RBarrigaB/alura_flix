import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import FormularioEditar from "./components/FormularioEditar";
import {
  create as crearVideo,
  findAll as obtenerTodo,
  eliminar as servicioEliminar,
  update as actualizarVideo,
} from "./services/api";
import Banner from "./components/Banner";

function App() {
  const [mostrarForm, actualizarForm] = useState(false);
  const [mostrarModalEditar, actualizarMostrarModalEditar] = useState(false);
  const [idVideoEditar, actualizarIdVideoEditar] = useState("");
  const [mostrarContent, actualizarMostrarContent] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([]);
  let [videos, actualizarVideos] = useState([]);
  let [categorias, actualizarCategoria] = useState([]);
  let [categoriaActual, actualizarCategoriaActual] = useState("");

  const mostrarVideoForm = () => {
    actualizarForm(true);
    actualizarMostrarContent(false);
  };

  const homeContent = () => {
    actualizarMostrarContent(true);
    actualizarForm(false);
  };

  const registrarVideo = async (video) => {
    await crearVideo("videos", video);
    await obtenerVideos();
  };

  const actualizarVideosService = async (id, video) => {
    await actualizarVideo("videos", id, video);
  };

  const eliminarVideo = async (id) => {
    console.log("Eliminar video en padre: ", id);
    await servicioEliminar("videos", id);
    await obtenerVideos();
  };

  const obtenerVideos = async () => {
    actualizarVideos(await obtenerTodo("videos"));
  };

  const obtenerCategorias = async () => {
    actualizarCategoria(await obtenerTodo("categorias"));
  };

  const mostrarFormEditar = (id, isVisible) => {
    actualizarIdVideoEditar(id);
    actualizarMostrarModalEditar(isVisible);
  };

  const cerrarFormEditar = (isVisible) => {
    actualizarMostrarModalEditar(isVisible);
  };

  const setCategoriaActual = (categoria) => {
    actualizarCategoriaActual(categoria);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      await obtenerVideos();
      await obtenerCategorias();
    };
    fetchVideos();
  }, []);

  const equiposIniciales = categorias;

  const [equipos, agregarEquipo] = useState(equiposIniciales);

  const crearEquipo = (nuevoEquipo) => {
    agregarEquipo([...equipos, nuevoEquipo]);
  };

  const cambiarLike = (id) => {
    let colaboradoresLike = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresLike);
  };

  return (
    <>
      <div>
        <Header mostrarFormVideo={mostrarVideoForm} homeContent={homeContent} />
        {(categorias.length >0 && categorias !==undefined) && <Banner
          categoria={categoriaActual === ""
                ? categorias[0]
                : categorias.find(
                    (categoria) => categoria.titulo === categoriaActual
                  )
          }
        />
}
        {
          mostrarForm && (
            <Formulario
              categorias={categorias.map((categoria) => categoria.titulo)}
              registrarVideo={registrarVideo}
              crearEquipo={crearEquipo}
              formType="crear"
              mostrarFormCrear={homeContent}
            />
          )
        }
        {
        mostrarModalEditar && (
          <FormularioEditar
            categorias={categorias.map((categoria) => categoria.titulo)}
            crearEquipo={crearEquipo}
            campoEditar="editField"
            mostrarModalEditar={mostrarModalEditar}
            initForm={videos.find((video) => video.id === idVideoEditar)}
            actualizarVideosService={actualizarVideosService}
            cerrarFormEditar={cerrarFormEditar}
          />
        )}
        {mostrarContent &&
          equiposIniciales.map((equipo) => {
            const videosCategoria = videos.filter(
              (video) =>
                video.categoria.replace(/\s+/g, "").toLowerCase() ===
                equipo.titulo.replace(/\s+/g, "").toLowerCase()
            );

            if (videosCategoria.length > 0) {
              return (
                <Equipo
                  key={equipo.titulo}
                  data={{
                    categoria: equipo.titulo,
                    videos: videosCategoria,
                  }}
                  colorPrimario={equipo.colorPrimario}
                  colorSecundario={equipo.colorSecundario}
                  videosCategoria={videosCategoria}
                  eliminarVideo={eliminarVideo}
                  cambiarLike={cambiarLike}
                  mostrarFormEditar={mostrarFormEditar}
                  actualizarCategoriaActual={setCategoriaActual}
                />
              );
            }
            return null;
          })}
        <Footer />
      </div>
    </>
  );
}

export default App;
