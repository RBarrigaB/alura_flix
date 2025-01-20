/* eslint-disable react/prop-types */
import "./Campo.css";

const Campo = (props) => {
  let {
    titulo,
    placeholder,
    required,
    valor,
    setValor,
    type = "texto",
    nombre,
    descripcionFormato,
  } = props;
  let setChange = (event) => {
    setValor(event.target.value);
  };
  let types = type === "texto" ? type : "texto " + "campo__" + type;
  if (nombre !== "descripcion") {
    return (
      <div className={"campo__" + types + " general"}>
        <label htmlFor={"input" + titulo}>{titulo}</label>
        <input
          type={type}
          placeholder={`Ingresar ${placeholder}...`}
          name={"input" + titulo}
          required={required ? required : false}
          value={valor}
          onChange={setChange}
        />
      </div>
    );
  } else {
    return (
      <div className={`campo__${types}`}>
        <label htmlFor={"input" + titulo} className="descripcion__label">
          {titulo}
        </label>
        <textarea
          type={type}
          placeholder={`Ingresar ${placeholder}...`}
          name={"input" + titulo}
          required={required ? required : false}
          value={valor}
          onChange={setChange}
          className={descripcionFormato}
        />
      </div>
    );
  }
};

export default Campo;
