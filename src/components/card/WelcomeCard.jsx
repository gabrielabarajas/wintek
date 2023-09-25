import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import styles from './WelcomeCard.module.css'

function WelcomeCard({text,image}) {

  return (
    <Card style={{ width: '18rem' }} className={styles.containerCard} >
      <Image className={styles.imageCard} variant="top" src={image} alt="imagen servicio" width={"50"} height={"50"}/>
      <Card.Body>
        <Card.Text className={`text ${styles.text}`} >{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WelcomeCard;