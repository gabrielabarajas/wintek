import React from 'react';
import Card from 'react-bootstrap/Card';

function TransformamosCard({image, text}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <img src={image} width={100} height={100} alt="image"/>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default TransformamosCard