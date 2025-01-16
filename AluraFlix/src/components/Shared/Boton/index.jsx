import "./Boton.css"

const Boton = (props) => {
    let {titulo,type} = props;
    return <button className="boton" type={type}>{titulo}</button>
}

export default Boton