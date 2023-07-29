import Footer from '../../components/footer/Footer';
import NavWintek from '../../components/navbar/Navbar';
import { Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styles from './Vive.module.css';
import { InputGroup } from 'react-bootstrap';

function Vive() {
  return (
    <div>
        <NavWintek/>
        <div className="container">
        <p className={`title ${styles.titlePage}`}>VIVE LA EXPERINCIA WINTEK</p>
        <Card className={styles.containerSection}>
        <Card.Body>
            <p className={`text ${styles.text}`}> Si quieres iniciar tu carrera o continuar tu trayectoria profesional en una de las empresas de transformación digital más innovadoras, envíanos tu hoja de vida para descubrir tu perfil.</p>
            <p className={`text ${styles.text}`}> Queremos conocerte y trabajar de la mano para crecer juntos. Vive la experiencia Wintek y sé parte de nuestra historia.</p>

            <p className={`text ${styles.text}`}>Envíanos tu  currículum</p>

            <Form className={styles.containerSection}>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle} >Nombre</InputGroup.Text>
              <Form.Control classname="w-50" type="text" aria-label="Nombre" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle} >Apellido</InputGroup.Text>
              <Form.Control classname="w-50" type="text" aria-label="Apellido" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle}>Correo electrónico</InputGroup.Text>
              <Form.Control type="email" aria-label="Email" />
            </InputGroup>

            <div>
              <InputGroup className="mb-3">
                <Form.Control type="file"/>
              </InputGroup>
            </div>
            
            <Button className= {styles.button} type="submit">Enviar</Button>
            </Form>
        
        </Card.Body>
        </Card>

        </div>
         <Footer/>

    </div>
  )
}

export default Vive