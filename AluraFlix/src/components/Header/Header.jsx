import "./Header.css";
import { FaHome, FaPlus } from "react-icons/fa";

function Header(props) {

    const {mostrarFormVideo,homeContent} = props;
    return <header className="header">
           <img className="header__logo" src='src\assets\img\aluraflix_logo.png' alt="aluraflix logo" ></img>
      <nav className="header__nav">
        <button className="header__button header__button--primary" onClick={homeContent}>
        <FaHome className="icon" />
          <span className="btn-text">HOME</span></button>
        <button className="header__button header__button--secondary" onClick={mostrarFormVideo}>
        <FaPlus className="icon" />
          <span className="btn-text">NUEVO VIDEO</span></button>
      </nav>
           </header>
    
}

export default Header