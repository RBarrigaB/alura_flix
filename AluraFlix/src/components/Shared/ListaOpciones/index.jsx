import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const {valor, setValor,categorias = [],formType} = props;
    const changeCategoria = (event) => {
        setValor(event.target.value)
    }
    
    return <div className="lista__opciones">
        <label htmlFor="opciones">Categorias</label>
        <select name="opciones" id="" value={valor} onChange={changeCategoria} style={{width:formType === 'crear'?"112%":"100%"}}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria...</option>
            {categorias.map((categoria,index) => {
                return <option key={index} value={categoria}>{categoria}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones