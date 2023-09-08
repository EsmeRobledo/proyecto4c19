import img1 from '../../img/pexels-kristina-paukshtite-1146760.jpg'
import './Conocenos.css'

const Conocenos = () => {


  return (
    <div>
      <main className='Contenedor-principal'>

        <section className="contenedor-blog">
          <article className="blog">
            <h1 className='conocenos'>Conocenos</h1>
            <div className='texto-imagen'>
              <div className='imagen'>
                <div className='blog'></div>
                <img src={img1} alt="imagen" />
              </div>
              <div className='blog-2'>

                <div className='texto'>
                  <h1>Somos The Cartel Burger</h1>
                  <p>Nacimos en 2021 en ciénaga Magdalena, iniciando operaciones con la inauguración de nuestro primer restaurante de comida casual. Adoptamos un estilo bastante original, y hoy por hoy nos inclinamos por tendencias vanguardistas y un estilo moderno, donde siempre podrás sentirte como en casa.</p>
                </div>
                <hr />
                <div className='rating'>
                  <div className='nacimiento'>
                    <p>Nacimiento</p>
                    <p>2021</p>
                  </div>

                  <div className='Rating'>
                    <p>Rating</p>
                    <p className='stars'>★★★★★</p>
                  </div>

                  <div className='ubicacion'>
                    <p>Ubicación</p>
                    <p>Ciénaga, Magdalena</p>
                  </div>
                </div>

                <hr />

                <div className='contacto'>

                  <div className='dirección'>
                    <h4>Visitanos</h4>
                    <p>Calle 154 #75c-314</p>
                  </div>
                  <div className='telefono'>

                    <h4>Telefono</h4>
                    <p>+57 - 012 345 6789</p>
                  </div>

                </div>
                <div className='horarios'>
                  <h4>Horarios de atención</h4>
                  <p>Lunes a viernes: 5:00 pm -10:00 pm</p>
                  <p>Sábados y domingos: 5:00 pm - 12:00 pm
                  </p>
                  <p>Festivos: 5:00 pm - 9:00 pm</p>
                </div>
              </div>
            </div>

          </article>
        </section>
      
      </main>
    </div>
  )
}

export default Conocenos