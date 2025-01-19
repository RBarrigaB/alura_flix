import './Equipo.css'
import Card from '../Card'

const Equipo = (props) => {

    const {categoria} = props.data
    const {videosCategoria,eliminarVideo,colorPrimario,mostrarFormEditar,actualizarCategoriaActual} = props
    const uniqueVideos = videosCategoria.filter(
        (video, index, self) => index === self.findIndex((v) => v.id === video.id)
      );
    return videosCategoria.length > 0 && <section className='equipo'>
        <div className="titulo__categoria" style={{backgroundColor: colorPrimario}}>{categoria.toUpperCase()}</div>
        <div className='videos'>
           {uniqueVideos.filter((video) => video)
           .map((video,index) => <Card
           infoVideo={video} 
           key={index} 
           colorPrimario={colorPrimario} 
           eliminarVideo={eliminarVideo}
           mostrarFormEditar={mostrarFormEditar}
           actualizarCategoriaActual={actualizarCategoriaActual}
           />)} 
        </div>
    </section>
}

export default Equipo