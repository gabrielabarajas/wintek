import Footer from '../../components/footer/Footer';
import NavWintek from '../../components/navbar/Navbar';
import { Card, Form } from 'react-bootstrap';
import './Vive.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Vive() {
  return (
    <div>

        <NavWintek/>
        <div className="cont-main-section">
        <p className="txt-title-section">VIVE LA EXPERINCIA WINTEK</p>
        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
            <p className="txt-text"> Si quieres iniciar tu carrera o continuar tu trayectoria profesional en una de las empresas de transformación digital más innovadoras, envíanos tu hoja de vida para descubrir tu perfil.</p>
            <p className="txt-text"> Queremos conocerte y trabajar de la mano para crecer juntos. Vive la experiencia Wintek y sé parte de nuestra historia.</p>
            <Form className='cont-form'>
              <Form.Group as={Row} className="mb-3" controlId="formArchivo">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>Adjuntar archivo</Form.Label>
                <Col>
                  <Form.Control size="lg" type="file"/>
                </Col>
              </Row>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button className= "bttnSection" type="submit">Enviar archivo</Button>
                </Col>
                </Form.Group>
              </Form>
         
        </Card.Body>
        </Card>

        </div>
         <Footer/>

    </div>
  )
}

export default Vive