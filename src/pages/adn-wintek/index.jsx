import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import { Card } from "react-bootstrap";
import secuencia from '../../../public/images/secuenciaPurple.png';
import imgSocios from '../../../public/images/Julio&Veronica (16 of 62).jpg';
import Image from 'next/image'
import styles from './adn.module.css'

function AdnWintek() {
  return (
    <div>
        <NavWintek/>
        <div className="container">
        <p className={`title ${styles.titlePage}`}>ADN WINTEK</p>
        <Card className={styles.containerSection}>
        <Card.Body className={styles.cardBody}>
            <p className={`text ${styles.text}`}> Cada eslabón y conexión en la estructura de nuestro ADN fue creado para ofrecer las mejores soluciones de transformación digital para las empresas; gracias a nuestra experiencia, capacitación constante, colaboraciones internacionales y una trayectoria de más de dos décadas de cada uno de los socios, podemos asegurar</p> 
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={`text ${styles.text}`}>Fusionar la mejor gestión técnica y del equipo</p>
            <Image src={secuencia} className={styles.iconAdn}alt='imagen secuencia'/>
            <p className={`text ${styles.text}`}>Garantizar la cercanía y seguimiento con nuestros clientes</p>
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={`text ${styles.text}`}>Escuchar activamente todas las necesidades de las empresas que confían en nosotros</p>
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={`text ${styles.text}`}>Evolucionar y crecer de la mano de todos los clientes, para mantenernos a la vanguardia</p>
            <Image src={secuencia} className={styles.iconAdn} alt='imagen secuencia'/>
            <p className={`text ${styles.text}`}>Compartir nuestra experiencia en diferentes industrias y países del mundo</p>
        </Card.Body>
        </Card>

        <p className={`title ${styles.titlePage}`}>SEMBLANZAS</p>
        
        <Image className={styles.imgSemblanzas} src={imgSocios} alt="imagen socios"  width="auto" height="auto" />
        
        <Card className={styles.containerSection}>
        <Card.Body >
            <p  className={`title ${styles.title}`}>Verónica Apellido Apellido</p>
            <p  className={`text ${styles.text}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Card.Body>
        </Card>

        <Card className={styles.containerSection}>
        <Card.Body >
            <p  className={`title ${styles.title}`}>Julio Merino Arango</p>
            <p className={`text ${styles.text}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Card.Body>
        </Card>

        </div>
         <Footer/>
    </div>
  )
}

export default AdnWintek;