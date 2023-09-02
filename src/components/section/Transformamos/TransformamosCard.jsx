import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './TransformamosCard.module.css'

function TransformamosCard({image, text}) {
  return (
    <div className={styles.wrapper}>
    <Card>
    <img src={image} width={100} height={100} alt="image"/>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default TransformamosCard