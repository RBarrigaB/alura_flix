import "./Boton.css"

const Boton = (props) => {
    let {titulo,type, externalClassName} = props;
    let localClassName = "boton "+externalClassName
    return <button className={localClassName} type={type}>{titulo}</button>
}

export default Boton