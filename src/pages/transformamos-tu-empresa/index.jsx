import NavWintek from "../../components/navbar/Navbar"
import { Card } from "react-bootstrap"
import asesoria from '../../../public/images/hand-green.png';
import implementa from '../../../public/images/implementation-green.png';
import capacita from '../../../public/images/book-green.png';
import actualiza from '../../../public/images/updated-green.png';
import estrategia from '../../../public/images/360-degrees-green.png';
import Footer from "../../components/footer/Footer";
import styles from './transformamos.module.css';
import Image from 'next/image';

function transformamos() {
  return (
    <div>
        <NavWintek/>
        <div className="container">
        <p className={`title ${styles.titlePage}`}>TRANSFORMAMOS TU EMPRESA</p>
        <Card  className={styles.containerSection}>
        <Card.Body className={styles.cardBody}>
            <p className={`text ${styles.text}`}> Conoce los diferentes servicios que tenemos para potencializar los recursos de tu compañía. Cada uno está diseñado para mejorar el performance de todas las direcciones que integran la empresa. </p>
            <Image src={asesoria} className={styles.iconSection} width={200} height={200} alt="imagen icono"/>
            <p className={`text ${styles.text}`}>Asesoría</p>
            <Image src={implementa} className={styles.iconSection} width={200} height={200} alt="imagen icono"/>
            <p className={`text ${styles.text}`}>Implementación</p>
            <Image src={capacita} className={styles.iconSection}  width={200} height={200} alt="imagen icono"/>
            <p className={`text ${styles.text}`}>Capacitación</p>
            <Image src={actualiza} className={styles.iconSection}  width={200} height={200} alt="imagen icono"/>
            <p className={`text ${styles.text}`}>Actualización</p>
            <Image src={estrategia} className={styles.iconSection}  width={200} height={200} alt="imagen icono"/>
            <p className={`text ${styles.text}`}>Estrategia 360º</p>
        </Card.Body>
        </Card>

        </div>
         <Footer/>
    </div>
  )
}

export default transformamos