import "./Header.css"

function Header(props) {

    const {mostrarFormVideo,homeContent} = props;
    return <header className="header">
           <img className="header__logo" src='src\assets\img\aluraflix_logo.png' alt="aluraflix logo" ></img>
      <nav className="header__nav">
        <button className="header__button header__button--primary" onClick={homeContent}>HOME</button>
        <button className="header__button header__button--secondary" onClick={mostrarFormVideo}>NUEVO VIDEO</button>
      </nav>
           </header>
    
}

export default Header