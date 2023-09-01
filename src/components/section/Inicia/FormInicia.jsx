import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormInicia() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Apellidos"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>
     
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Control
            required
            type="text"
            placeholder="Puesto"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Control
            required
            type="text"
            placeholder="Empresa"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Control
            required
            type="text"
            placeholder="Teléfono"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom06">
          <Form.Control
            required
            type="email"
            placeholder="Correo electrónico"
          />
          <Form.Control.Feedback>Dato Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Control
            required
            type="text"
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
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
export default FormInicia;