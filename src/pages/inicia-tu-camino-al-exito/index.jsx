import Footer from '../../components/footer/Footer';
import NavWintek from '../../components/navbar/Navbar';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './Inicia.module.css';
import { createContact } from '../../utils/server/contacts';
import { useEffect } from 'react';

function Inicia() {
    useEffect(() => {
      /* createContact({
        email: 'marc@gmail.com',
        name: 'Marc',
        phone: '6745648'
      })*/ 
    }, [])


    const onSubmit = (values) => {
      
      createContact(values)
    }

  return (
    <>
        <NavWintek/>
        <div className="container">
          <p className={`title ${styles.titlePage}`}>INICIA TU CAMINO AL ÉXITO</p>
          <Card className={styles.containerSection}>
          <Card.Body className={styles.cardBody}>
            <p className={`text ${styles.text}`}> Puedes hacer la mejor transformación digital para tu empresa, ahora.</p> 
            <p className={`text ${styles.text}`}> Solo compártenos tus datos y una breve descripción de lo que necesitas para hacer despegar tu compañía. </p> 
            <p className={`text ${styles.text}`}>A la brevedad nos pondremos en contacto contigo.</p> 
        <form onSubmit={onSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle} >Nombre</InputGroup.Text>
              <Form.Control classname="w-50" type="text" aria-label="Nombre" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle} >Apellido</InputGroup.Text>
              <Form.Control classname="w-50" type="text" aria-label="Apellido" />
            </InputGroup>
            

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle}>Puesto</InputGroup.Text>
              <Form.Control type="text" aria-label="Puesto" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle}>Empresa</InputGroup.Text>
              <Form.Control type="text" aria-label="Empresa" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle}>Teléfono</InputGroup.Text>
              <Form.Control type="text" aria-label="Telefono" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle}>Correo electrónico</InputGroup.Text>
              <Form.Control type="email" aria-label="Email" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text className={styles.textLabelStyle}>Mensaje</InputGroup.Text>
              <Form.Control type="text"  as="textarea" rows={5}/>
            </InputGroup>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button className= {styles.button} type="submit">Enviar</Button>
              </Col>
            </Form.Group>
        </form>
        </Card.Body>
        </Card>
        </div>
         <Footer/>
    </>
  )
}

export default Inicia