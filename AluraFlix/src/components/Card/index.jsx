
import './Card.css';
import { HiOutlineArchiveBoxXMark,HiOutlinePencil } from "react-icons/hi2";

const Card = () => {
  return (
    <div className="card">
      <a
        href="https://youtu.be/dzEieWaOJE0"
        target="_blank"
        rel="noopener noreferrer"
        className="card__image-link"
      >
        <img
          src='src\assets\img\var_let_const.jpg'
          alt="Miniatura del video"
          className="card__image"
        />
      </a>
      <div className="card__content">
        <h3 className="card__title">CUÁNDO USAR LET, VAR Y CONST?</h3>
        <div className="card__buttons">
          <div>
          
          <button className="card__button card__button--delete"><HiOutlineArchiveBoxXMark /> Borrar</button>
            </div>  
          
          <button className="card__button card__button--edit"><HiOutlinePencil /> Editar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
