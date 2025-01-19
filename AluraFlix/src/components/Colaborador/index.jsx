import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = (props) => {

    const {id,titulo,categoria,imagen} = props.infoVideo
    const {colorPrimario,eliminarColaborador} = props
    return <div className='colaborador'>
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar'/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={imagen} />
        </div>
        <div className='info'>
            <h4>
                {titulo}
            </h4>
            <h5>
                {categoria}
            </h5>
        </div>
    </div>
}

export default Colaborador