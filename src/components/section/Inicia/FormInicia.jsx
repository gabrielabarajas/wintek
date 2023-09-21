import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormInicia({onSubmit}) {
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form =  event.currentTarget;

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData);
    onSubmit(formDataObj);
    setValidated(true);
  };

  return(
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control
            required
            name="fullname"
            type="text"
            placeholder="Nombre Completo"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Control
            required
            name="phone"
            type="text"
            placeholder="Teléfono"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom06">
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Correo electrónico"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Control
            required
            name="message"
            type="message"
            as="textarea" rows={6}
            placeholder="Mensaje sobre el servicio de interés"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="De acuerdo con los términos y condiciones"
          feedback="Porfavor seleccione oción de acuerdo a términos y condiciones"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
export default FormInicia;