import "./Header.css";
import { GrAddCircle } from "react-icons/gr";
import { PiHouseLight } from "react-icons/pi";

function Header(props) {
  const { mostrarFormVideo, homeContent } = props;
  return (
    <header className="header">
      <img
        className="header__logo"
        src="src\assets\img\aluraflix_logo.png"
        alt="aluraflix logo"
      ></img>
      <nav className="header__nav">
        <button
          className="header__button header__button--primary"
          onClick={homeContent}
        >
          <div className="home_icon">
            <PiHouseLight className="icon" />
            <span className="btn-text btn-home">HOME</span>
          </div>
        </button>
        <button
          className="header__button header__button--secondary"
          onClick={mostrarFormVideo}
        >
          <GrAddCircle className="icon" />
          <span className="btn-text">NUEVO VIDEO</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
