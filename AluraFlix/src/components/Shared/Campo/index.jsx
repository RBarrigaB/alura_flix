import "./Campo.css"

const Campo = (props) => {
    let {titulo,placeholder,required,valor,setValor,type="texto"} = props;
    let setChange = (event) => {
        setValor(event.target.value)
    }
    let types = type === "texto"? type: "texto "+"campo__"+type
    return <div className={"campo__"+types}>
        <label htmlFor={"input"+titulo}>{titulo}</label>
            <input 
            type={type} 
            placeholder={`Ingresar ${placeholder}...`} 
            name={"input"+titulo} 
            required={required?required:false} 
            value={valor}
            onChange={setChange}/>
    </div>
}

export default Campo