import "./FormularioEditar.css";
import "../Shared/Campo";
import Campo from "../Shared/Campo";
import ListaOpciones from "../Shared/ListaOpciones";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Boton from "../Shared/Boton";

const FormularioEditar = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const { registrarColaborador, equipos } = props;

  const manejoForm = (event) => {
    event.preventDefault();
    let transactionalObj = {
      id: uuidv4(),
      nombre,
      puesto,
      foto,
      equipo,
      favorito: false,
    };
    registrarColaborador(transactionalObj);
  };

  /*    const manejoFormEquipo = (event) => {
        event.preventDefault()
        let equipoObj = {
            id: uuidv4(),
            titulo,
            colorPrimario: color
        }
        crearEquipo(equipoObj)
    } */
  return (
    <section className="formularioEditar">
      <h1>EDITAR CARD</h1>

      <form onSubmit={manejoForm}>

        {/* Campos */}
          <Campo
            titulo="Título"
            placeholder="título"
            required={true}
            valor={nombre}
            setValor={setNombre}
            
          />

          <ListaOpciones
            valor={equipo}
            setValor={setEquipo}
            equipos={equipos}
          />

          <Campo
            titulo="Imagen"
            placeholder="enlace de la imagen"
            required={true}
            valor={foto}
            setValor={setFoto}
            type="texto"
          />

          <Campo
            titulo="Video"
            placeholder="enlace del video"
            required={true}
            valor={puesto}
            setValor={setPuesto}
            type="texto"
          />

        <Campo
          titulo="Descripción"
          placeholder="descripción"
          required={true}
          valor={titulo}
          setValor={setTitulo}
          type="texto"
          nombre="descripcion"
          descripcionFormato="campo_descripcion_editar"
        />

        <div className="boton-contenedor">
          <Boton titulo="Guardar" type="submit" externalClassName="btn-guardar"/>
          <Boton titulo="Limpiar" type="reset" externalClassName="btn-limpiar"/>
        </div>
      </form>
    </section>
  );
};

export default FormularioEditar;
