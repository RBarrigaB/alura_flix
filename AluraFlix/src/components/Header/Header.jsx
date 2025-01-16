import "./Header.css"

function Header() {
    return <header className="header">
           <img className="header__logo" src='src\assets\img\aluraflix_logo.png' alt="aluraflix logo" ></img>
      <nav className="header__nav">
        <button className="header__button header__button--primary">HOME</button>
        <button className="header__button header__button--secondary">NUEVO VIDEO</button>
      </nav>
           </header>
    
}

export default Header