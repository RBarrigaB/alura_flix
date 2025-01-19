import "./Card.css";
import { HiOutlineArchiveBoxXMark, HiOutlinePencil } from "react-icons/hi2";

const Card = (props) => {
  const { colorPrimario, infoVideo, eliminarVideo,mostrarFormEditar,actualizarCategoriaActual} = props;
  const id = infoVideo?.id;
  const imagen = infoVideo?.imagen;
  const video = infoVideo?.video;
  const categoria = infoVideo?.categoria;

  return infoVideo ? (
    <div className="card" style={{ boxShadow: `inset 0 0 10px 3px ${colorPrimario}`}} onMouseEnter={() => {
      console.log("Mouse enter triggered:", categoria);
      actualizarCategoriaActual(categoria);
    }}>
        <a
        href={video}
        target="_blank"
        rel="noopener noreferrer"
        className="card__image-link"
      >
        <img src={imagen} alt="Miniatura del video" className="card__image" />
      </a> 
      <div className="card__content">
        <div className="card__buttons">
          <div>
            <button className="card__button card__button--delete" onClick={() => {
                  eliminarVideo(id);
                }}>
              <HiOutlineArchiveBoxXMark className="iconos"/>
              Borrar
            </button>
          </div>

          <button className="card__button card__button--edit" onClick={() => mostrarFormEditar(id,true)}>
            <HiOutlinePencil className="iconos"/> Editar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Card;
