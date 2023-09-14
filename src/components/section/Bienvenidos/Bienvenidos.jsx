import Image from 'next/image';
import MainImage from '../../../../public/images/MainImage.jpg';
import styles from './Bienvenidos.module.css';

function SectionInit() {
  return (
    <>
    <div className={styles.containerSection}>
      <div className={styles.textSection}>
          <p className={styles.title}>EXPERIENCIA</p> 
          <p className={styles.title}>TECNOLOGIA</p> 
          <p className={styles.title}>LIDERAZGO</p> 
      </div>
      <Image data-aos="fade-right" data-aos-mirror="true" className={styles.image + ' aos-item'} src={MainImage} width={800} height={400} alt='image for the section'/>
    </div>
    </>
      
  );
}
export default SectionInit;