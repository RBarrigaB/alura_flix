import './Equipo.css'
import Colaborador from '../Colaborador'

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario} = props.data
    const {colaboradores,eliminarColaborador,cambiarLike} = props
    return colaboradores.length > 0 && <section className='equipo' style={{backgroundColor:colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className='colaboradores'>
           {colaboradores.map((colaborador,index) => <Colaborador 
           infoColaborador={colaborador} 
           key={index} 
           colorPrimario={colorPrimario} 
           colorSecundario={colorSecundario}
           eliminarColaborador={eliminarColaborador}
           cambiarLike = {cambiarLike}/>)} 
        </div>
    </section>
}

export default Equipo