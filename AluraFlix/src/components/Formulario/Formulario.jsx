import "./Formulario.css";
import "../Shared/Campo";
import Campo from "../Shared/Campo";
import ListaOpciones from "../Shared/ListaOpciones";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Boton from "../Shared/Boton";

const Formulario = (props) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { registrarVideo, categorias, formType } = props;

  const manejoForm = (event) => {
    event.preventDefault();
    const nuevoVideo = {
      id: uuidv4(),
      titulo,
      categoria,
      imagen,
      video,
      descripcion,
    };
    registrarVideo(nuevoVideo);
    limpiarForm();
  };

  const limpiarForm = () => {
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
  };

  return (
    <section className="formulario">
      <h1>NUEVO VIDEO</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>

      <form onSubmit={manejoForm}>
        <div className="titulo-con-lineas">
          <h2>Crear Tarjeta</h2>
        </div>

        {/* Campos */}
        <div className="titulo__opciones">
          <Campo
            titulo="Título"
            placeholder="título"
            required={true}
            valor={titulo}
            setValor={setTitulo}
          />

          <ListaOpciones
            valor={categoria}
            setValor={setCategoria}
            categorias={categorias}
            formType={formType}
          />
        </div>

        <div className="imagen__video">
          <Campo
            titulo="Imagen"
            placeholder="enlace de la imagen"
            required={true}
            valor={imagen}
            setValor={setImagen}
            type="texto"
          />

          <Campo
            titulo="Video"
            placeholder="enlace del video"
            required={true}
            valor={video}
            setValor={setVideo}
            type="texto"
          />
        </div>
        <div className="desc__field">
          <Campo
            titulo="Descripción"
            placeholder="descripción"
            required={true}
            valor={descripcion}
            setValor={setDescripcion}
            type="texto"
            nombre="descripcion"
            descripcionFormato="campo_descripcion_crear"
          />
        </div>
        <div className="boton-contenedor">
          <Boton
            titulo="Guardar"
            type="submit"
            externalClassName="btn-guardar"
          />
          <Boton
            titulo="Limpiar"
            type="reset"
            externalClassName="btn-limpiar"
            onClick={limpiarForm}
          />
        </div>
      </form>
    </section>
  );
};

export default Formulario;
