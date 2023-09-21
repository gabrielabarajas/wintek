import Image from 'next/image';
import MainImage from '../../../../public/images/MainImage.png';
import styles from './Bienvenidos.module.css';

function Bienvenidos() {
  return (
    <div id='bienvenidos' className={styles.containerSection}>
      <div className={styles.textSection}>
          <p align="center" className={`title`}>MEJORAMOS TU EXPERIENCIA SAP</p>
          <p align="center" className={`title`}>CON LOS CONOCIMIENTOS</p>
          <p align="center" className={`title`}> DE NUESTROS EXPERTOS</p>
      </div>
      <div className={styles.imagesSection}>
          <Image data-aos="fade-right" data-aos-mirror="true" className={styles.image + ' aos-item'} src={MainImage} width={'auto'} height={'auto'} alt='image for the section'/>
      </div>
    </div>
  );
}
export default Bienvenidos;