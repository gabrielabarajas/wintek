import Footer from '../../components/footer/Footer';
import NavWintek from '../../components/navbar/Navbar';
import { Card } from 'react-bootstrap';
import './Inicia.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Inicia() {
  return (
    <div>
         <NavWintek/>
        <div className="cont-main-section">
        <p className="txt-title-section">INICIA TU CAMINO EL ÉXITO</p>
        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
            <p className="txt-text"> Puedes hacer la mejor transformación digital para tu empresa, ahora.</p> 
            <p className="txt-text"> Solo compártenos tus datos y una breve descripción de lo que necesitas para hacer despegar tu compañía. </p> 
            <p className="txt-text">A la brevedad nos pondremos en contacto contigo.</p> 

            <Form className='cont-form'>
            
              <Form.Group as={Row} className="mb-3" controlId="formNombre">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>Nombre</Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Nombre" />
                </Col>
              </Row>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPuesto">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>Puesto</Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Puesto" />
                </Col>
              </Row>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formEmpresa">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>Empresa</Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Empresa" />
                </Col>
              </Row>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formTelefono">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>Teléfono</Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Teléfono" />
                </Col>
              </Row>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formCorreo">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>e-mail</Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Correo electrónico" />
                </Col>
              </Row>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formMensaje">
              <Row>
                <Form.Label className="txt-text font-label" column="lg" lg={2}>Mensaje</Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder="Mensaje" />
                </Col>
              </Row>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button className= "bttnSection" type="submit">Enviar</Button>
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

export default Inicia