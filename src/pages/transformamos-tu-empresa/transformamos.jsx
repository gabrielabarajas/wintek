import NavWintek from "../../components/navbar/Navbar"
import { Card } from "react-bootstrap"
import asesoria from '../../images/hand-green.png';
import implementa from '../../images/implementation-green.png';
import capacita from '../../images/book-green.png';
import actualiza from '../../images/updated-green.png';
import estrategia from '../../images/360-degrees-green.png';
import Footer from "../../components/footer/Footer";
import './transformamos.css';

function transformamos() {
  return (
    <div>
        <NavWintek/>
        <div className="cont-main-section">
        <p className="txt-title-section">Transformamos tu empresa</p>
        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
            <p className="txt-text"> Conoce los diferentes servicios que tenemos para potencializar los recursos de tu compañía. Cada uno está diseñado para mejorar el performance de todas las direcciones que integran la empresa. </p>
            <img src={asesoria} className="icon-transforma"/>
            <p className="txt-text txt-transforma">Asesoría</p>
            <img src={implementa} className="icon-transforma"/>
            <p className="txt-text txt-transforma">Implementación</p>
            <img src={capacita} className="icon-transforma"/>
            <p className="txt-text txt-transforma">Capacitación</p>
            <img src={actualiza} className="icon-transforma"/>
            <p className="txt-text txt-transforma">Actualización</p>
            <img src={estrategia} className="icon-transforma"/>
            <p className="txt-text txt-transforma">Estrategia 360º</p>
        </Card.Body>
        </Card>

        </div>
         <Footer/>
    </div>
  )
}

export default transformamos