import "./Formulario.css";
import "../Shared/Campo";
import Campo from "../Shared/Campo";
import ListaOpciones from "../Shared/ListaOpciones";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Boton from "../Shared/Boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");

  const { registrarColaborador, crearEquipo, equipos } = props;

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
    <section className="formulario">
      <h1>NUEVO VIDEO</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>

      <form onSubmit={manejoForm}>
        <div className="titulo-con-lineas">
          <hr />
          <h2>Crear Tarjeta</h2>
          <hr />
        </div>

        {/* Campos */}
        <div className="titulo__opciones">
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
        </div>

        <div className="imagen__video">
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
        </div>

        <Campo
          titulo="Descripción"
          placeholder="descripción"
          required={true}
          valor={titulo}
          setValor={setTitulo}
          type="texto"
        />

        <div className="boton-contenedor">
          <Boton titulo="Guardar" type="submit" />
          <Boton titulo="Limpiar" type="reset" />
        </div>
      </form>
    </section>
  );
};

export default Formulario;
