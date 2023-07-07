import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import { Card } from "react-bootstrap";
import secuencia from '../../images/secuencia-wintek-2.png';
import imgSocios from '../../images/Julio&Veronica (16 of 62).jpg';
import './adn.css';

function AdnWintek() {
  return (
    <div>
        <NavWintek/>
        <div className="cont-main-section">
        <p className="txt-title-section">ADN WINTEK</p>
        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
            <p className="txt-text"> Cada eslabón y conexión en la estructura de nuestro ADN fue creado para ofrecer las mejores soluciones de transformación digital para las empresas; gracias a nuestra experiencia, capacitación constante, colaboraciones internacionales y una trayectoria de más de dos décadas de cada uno de los socios, podemos asegurar</p> 
            <img src={secuencia} className="icon-adn"/>
            <p className="txt-text">Fusionar la mejor gestión técnica y del equipo</p>
            <img src={secuencia} className="icon-adn"/>
            <p className="txt-text">Garantizar la cercanía y seguimiento con nuestros clientes</p>
            <img src={secuencia} className="icon-adn"/>
            <p className="txt-text">Escuchar activamente todas las necesidades de las empresas que confían en nosotros</p>
            <img src={secuencia} className="icon-adn"/>
            <p className="txt-text">Evolucionar y crecer de la mano de todos los clientes, para mantenernos a la vanguardia</p>
            <img src={secuencia} className="icon-adn"/>
            <p className="txt-text">Compartir nuestra experiencia en diferentes industrias y países del mundo</p>
        </Card.Body>
        </Card>

        <p className="txt-title-section">SEMBLANZAS</p>
        <img src={imgSocios} className="img-semblanzas"/>
        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
            <p className="txt-title">Verónica Apellido Apellido</p>
            <p className="txt-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Card.Body>
        </Card>

        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
            <p className="txt-title">Julio Merino Arango</p>
            <p className="txt-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Card.Body>
        </Card>

        </div>
         <Footer/>
    </div>
  )
}

export default AdnWintek;