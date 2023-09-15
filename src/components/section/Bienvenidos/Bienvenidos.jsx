import Image from 'next/image';
import MainImage from '../../../../public/images/MainImage.jpg';
import styles from './Bienvenidos.module.css';

function Bienvenidos() {
  return (
    <div id='bienvenidos' className={styles.containerSection}>

      <div className={styles.textSection}>
          <p className={styles.title}>EXPERIENCIA</p>
          <p className={styles.title}>TECNOLOGIA</p>
          <p className={styles.title}>LIDERAZGO</p>
      </div>
      <div className={styles.imagesSection}>
          <Image data-aos="fade-right" data-aos-mirror="true" className={styles.image + ' aos-item'} src={MainImage} width={'auto'} height={'auto'} alt='image for the section'/>
      </div>
    </div>
  );
}
export default Bienvenidos;