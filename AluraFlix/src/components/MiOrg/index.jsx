import "./MiOrg.css"

const MiOrg = (props) => {
    let {titulo,actualizarOrg} = props;
    return <section className="orgSection">
        <h3 className="titulo">{titulo}</h3>
        <img src="src\assets\img\add.png" alt="add button" onClick={actualizarOrg}/>
    </section>
}

export default MiOrg