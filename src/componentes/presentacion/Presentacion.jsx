import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './presentacion.css'
import img1 from '../../img/pexels-chan-walrus-958545.jpg'
import img2 from '../../img/pexels-kristina-paukshtite-1146760.jpg'
import img3 from '../../img/pexels-lumn-604969.jpg'


function Presentacion() {
    return (
        <>
            <div className='carouseldiv'>
                <Carousel fade>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />

                        <Carousel.Caption>

                            <h3>Comida India</h3>

                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />

                        <Carousel.Caption>

                            <h3>Pizza a la leña</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />

                        <Carousel.Caption>

                            <h3>Pizza horneada</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



        </>



    )

}



export default Presentacion