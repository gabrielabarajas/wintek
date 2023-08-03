import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import { Card } from "react-bootstrap";
import styles from "./Bienvenidos.module.css";
import Image from 'next/image';
import wellcomeImage from '../../../public/images/Julio&Veronica (53 of 62).jpg';

function Bienvenidos() {
  return (
    <>
        <NavWintek/>
        <div className="container">
        <p className={`title ${styles.titlePage}`}>AVANCEMOS JUNTOS HACIA EL ÉXITO</p>
        <Card  className={styles.containerSection}>
        <Card.Body className={styles.cardBody}>
            <Image src={wellcomeImage} className={styles.iconSection} width={650} height={450} alt="imagen icono"/>
            <p className={`text ${styles.text}`}>Todo comenzó con el propósito de transformar las organizaciones de nuestros clientes a través de soluciones tecnológicas de vanguardia. La pasión por la tecnología y su potencial para impulsar el crecimiento empresarial nos llevó a dar un salto de fe y fundar Wintek Consulting. </p>
            <p className={`text ${styles.text}`}>Atrás quedan años de experiencia trabajando en el campo de la consultoría, donde apreciamos de primera mano cómo las compañías luchaban por mantenerse al día con el vertiginoso ritmo de la revolución digital. Fue en ese momento de reflexión que como socios fundadores tomamos la decisión de reunir a un equipo de expertos apasionados por la tecnología y con una amplia experiencia en implementaciones de SAP R/3 y S4/Hana</p>
            <p className={`text ${styles.text}`}>Hoy consolidados como Wintek Consulting queremos marcar la diferencia y convertirnos en un socio estratégico para las empresas que buscan aprovechar todo el potencial de SAP y obtener ventajas competitivas en sus respectivos mercados.</p>
            <p className={`text ${styles.text}`}>Desde el día uno, nuestro compromiso ha sido claro: </p>
            <p className={`text ${styles.text}`}>“Brindar soluciones integrales y personalizadas que satisfagan las necesidades únicas de cada cliente. No nos conformamos con ser un proveedor de servicios, queremos ser parte fundamental del éxito de nuestros clientes”.</p>

            <p className={`text ${styles.text}`}>Nuestro enfoque siempre será mantenernos a la vanguardia de la tecnología, invertir en la formación continua de nuestro equipo y fomentar una cultura de innovación y creatividad. Buscamos la excelencia técnica, la calidad en las relaciones con nuestros clientes y creatividad para enfrentar los desafíos del mundo empresarial en constante cambio.</p>
            <p className={`text ${styles.text}`}>Cada proyecto que abordamos se convierte en una oportunidad para superar límites y alcanzar nuevas metas. Estamos comprometidos a  formar parte del  camino hacia el futuro digital de nuestros clientes y de hacer juntos realidad todo el potencial de su organización.</p>
        </Card.Body>
        </Card>
        </div>
         <Footer/>
    </>
  )
}

export default Bienvenidos