import "./Boton.css"

const Boton = (props) => {
    let {titulo,type, externalClassName,onClick} = props;
    let localClassName = "boton "+externalClassName
    return <button className={localClassName} type={type} onClick={onClick}>{titulo}</button>
}

export default Boton