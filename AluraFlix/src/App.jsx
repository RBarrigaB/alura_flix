import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card";
import FormularioEditar from "./components/FormularioEditar";

function App() {
  const [mostrarForm, actualizarForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]);
  const actualizarOrg = () => {
    actualizarForm(!mostrarForm);
  };

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    let nuevosColaboradores = colaboradores.filter(
      (colabId) => colabId.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  const equiposIniciales = [
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFFEDF",
    },
  ];

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
              equipos={equipos.map((equipo) => equipo.titulo)}
              registrarColaborador={registrarColaborador}
              crearEquipo={crearEquipo}
              formType="crear"
            />
          )
        }
        <FormularioEditar
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        campoEditar = "editField" 
        />
        <MiOrg titulo="Mi organización" actualizarOrg={actualizarOrg} />
        {equipos.map((equipo) => (
          <Equipo
            data={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            cambiarLike={cambiarLike}
          />
        ))}
        <Footer />
      </div>
    </>
  );
}

export default App;
