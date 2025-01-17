import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const {valor, setValor,equipos,formType} = props;
    const changeEquipo = (event) => {
        setValor(event.target.value)
    }

    return <div className="lista__opciones">
        <label htmlFor="opciones">Equipos</label>
        <select name="opciones" id="" value={valor} onChange={changeEquipo} style={{width:formType === 'crear'?"112%":"100%"}}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo...</option>
            {equipos.map((equipo,index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones