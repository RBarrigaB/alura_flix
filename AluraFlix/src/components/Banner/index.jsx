import "./Banner.css";

const Banner = (props) => {

    const {categoria} = props
    const color=categoria?.colorPrimario
    const descripcion = categoria?.descripcion
    const video = categoria?.video
    const imagen = categoria?.imagen
    const urlImagenFondo = "https://img.freepik.com/premium-photo/hacker-cyber-criminal-with-laptop-related-icons-it-cyber-crime-hacker-activity-ddos-attack-digital-system-security-fraud-money-cyberattack-threat-malware-virus-alert-concept_686498-5763.jpg"
  return (
    <div className="banner"  style={{
        backgroundImage: `url(${urlImagenFondo})`,
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        height: "50vh",
      }}>
      <div className="banner-left">
        <span className="banner-label" style={{backgroundColor: color}}>{categoria.titulo.toUpperCase()}</span>
        <h1>Challenge React</h1>
        <p>{descripcion}</p>
      </div>
      <div className="banner-right">
        <a href={video} target="_blank" rel="noopener noreferrer">
          <img
            src={imagen}
            alt="Video thumbnail"
            className="video-thumbnail"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
