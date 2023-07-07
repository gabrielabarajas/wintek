import Carousel from 'react-bootstrap/Carousel';
import imageOne from '../../../public/images/transformation-three3.jpg';
import imageTwo from '../../../public/images/closeup-business-man-networking-smartphone.jpg';
import imageThree from '../../../public/images/programming-background-with-person-working-with-codes-computer.jpg';
import styles from './Carrusel.module.css';
import Image from 'next/image';


function Carrusel() {
  return (
    <>
      <Carousel className={styles.container}>
        <Carousel.Item interval={1000}>
        <Image className={styles.imageCarousel} src={imageOne} alt="First slide" width="auto" height="auto"/>
        <Carousel.Caption> <p className={styles.text} >Experiencia</p> </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Image className={styles.imageCarousel} src={imageTwo} alt="Second slide" width="auto" height="auto"/>
          <Carousel.Caption> <p className={styles.text} >Tecnología</p> </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Image className={styles.imageCarousel} src={imageThree} alt="Third slide" width="auto" height="auto"/>
          <Carousel.Caption> <p className={styles.text} >Liderazgo</p> </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  );
}

export default Carrusel;
