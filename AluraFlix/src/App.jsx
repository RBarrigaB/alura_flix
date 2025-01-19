import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import Card from "./components/Card";
import FormularioEditar from "./components/FormularioEditar";
import { create as crearVideo,
         findAll as obtenerTodo,
         eliminar as servicioEliminar 
 } from "./services/api";

function App() {
  const [mostrarForm, actualizarForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]);
  let [videos,actualizarVideos] = useState([]);
  let [categorias,actualizarCategoria] = useState([]);
  const actualizarOrg = () => {
    actualizarForm(!mostrarForm);
  };

  const registrarVideo = async (video) => {
   await crearVideo('videos',video)
   await obtenerVideos();
  };

  const eliminarVideo = async (id) => {
    console.log("Eliminar video en padre: ",id);
   await servicioEliminar('videos',id);
   await obtenerVideos();
  };

  const obtenerVideos = async () => {
    actualizarVideos(await obtenerTodo('videos'))
  }

  const obtenerCategorias = async () => {
    actualizarCategoria(await obtenerTodo('categorias'))
  }

  useEffect(() => {
    const fetchVideos = async () => {
      await obtenerVideos();
      await obtenerCategorias();
    };
    fetchVideos();
  }, []);

  const equiposIniciales = categorias

  const [equipos, agregarEquipo] = useState(equiposIniciales);

  const crearEquipo = (nuevoEquipo) => {
    agregarEquipo([...equipos, nuevoEquipo]);
  };

  const cambiarLike = (id) => {
    let colaboradoresLike = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresLike)
  }

  return (
    <>
      <div>
        {/* <Header></Header>*/}
        <Header />
        <Card />
        {/*mostrarForm?<Formulario />:<></>*/}
        {
          /* Corto circuito */
          mostrarForm && (
            <Formulario
              categorias={categorias.map((categoria) => categoria.titulo)}
              registrarVideo={registrarVideo}
              crearEquipo={crearEquipo}
              formType="crear"
            />
          )
        }
       { mostrarForm && (<FormularioEditar
        equipos={equipos.map((equipo) => equipo.titulo)}
        crearEquipo={crearEquipo}
        campoEditar = "editField" 
        />)}
        <MiOrg titulo="Mi organización" actualizarOrg={actualizarOrg} />
        {equiposIniciales.map((equipo) => {
        const videosCategoria = videos.filter(
          (video) =>
            video.categoria.replace(/\s+/g, '').toLowerCase() ===
            equipo.titulo.replace(/\s+/g, '').toLowerCase()
        );

        if (videosCategoria.length > 0) {
          return (
            <Equipo
              key={equipo.titulo}
              data={{
                categoria: equipo.titulo, // Nombre de la categoría
                videos: videosCategoria, // Videos filtrados por categoría
              }}
              colorPrimario={equipo.colorPrimario}
              colorSecundario={equipo.colorSecundario}
              videosCategoria={videosCategoria} // Se mantiene este prop según la estructura existente
              eliminarVideo={eliminarVideo}
              cambiarLike={cambiarLike}
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
