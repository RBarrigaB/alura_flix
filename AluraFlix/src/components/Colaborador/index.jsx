import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborador = (props) => {

    const {nombre,puesto,foto,id,favorito} = props.infoColaborador
    const {colorPrimario,eliminarColaborador,cambiarLike} = props
    return <div className='colaborador'>
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar'/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} />
        </div>
        <div className='info'>
            <h4>
                {nombre}
            </h4>
            <h5>
                {puesto}
            </h5>
        {favorito?<AiFillHeart onClick={() => cambiarLike(id)} color='red' />:<AiOutlineHeart onClick={() => cambiarLike(id)}/>}
        </div>
    </div>
}

export default Colaborador