import "./FormularioEditar.css";
import "../Shared/Campo";
import Campo from "../Shared/Campo";
import ListaOpciones from "../Shared/ListaOpciones";
import Modal from "../Modal";
import { useState, useEffect } from "react";
import Boton from "../Shared/Boton";

const FormularioEditar = (props) => {
  let [id, setId] = useState("");
  let [titulo, setTitulo] = useState("");
  let [categoria, setCategoria] = useState("");
  let [imagen, setImagen] = useState("");
  let [video, setVideo] = useState("");
  let [descripcion, setDescripcion] = useState("");
  const { categorias, formType, initForm,mostrarModalEditar,actualizarVideosService,cerrarFormEditar} = props;

  const closeModal = () => {
    cerrarFormEditar(false);
  };

  const manejoForm = (event) => {
    event.preventDefault();
    const nuevoVideo = {
      id,
      titulo,
      categoria,
      imagen,
      video,
      descripcion,
    };
    actualizarVideosService(id,nuevoVideo);
    limpiarForm();
    closeModal();
  };

  const limpiarForm = () => {
    setId("")
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
  };

  useEffect(() => {
    setId(initForm.id || "");
    setTitulo(initForm.titulo || "");
    setCategoria(initForm.categoria || "");
    setImagen(initForm.imagen || "");
    setVideo(initForm.video || "");
    setDescripcion(initForm.descripcion || "");
  }, [initForm,mostrarModalEditar]);

  return (
    <Modal isVisible={mostrarModalEditar} onClose={closeModal}>
    <section className="formularioEditar">
      <h1>EDITAR CARD</h1>
      <form onSubmit={manejoForm}>
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
       </Modal>
  );
};

export default FormularioEditar;
