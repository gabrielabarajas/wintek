import Image from 'next/image';
import MainImage from '../../../../public/images/MainImage.jpg';
import Logo from '../../../../public/images/WINTEK-LOGO-crop.png';
import styles from './SectionInit.module.css';

function SectionInit() {
  return (
    <>
    <div className={styles.containerSection}>
      <div className={styles.textSection}>
          <p className={styles.title}>EXPERIENCIA</p> 
          <p className={styles.title}>TECNOLOGIA</p> 
          <p className={styles.title}>LIDERAZGO</p> 
      </div>
      <div className={styles.imagesSection}>
          <Image className={styles.image} src={MainImage} width={800} height={400} alt='image for the section'/>
          <Image className={styles.logo} src={Logo} width={400} height={200} alt='image for the section'/>
      </div>
    </div>
    </>
      
  );
}
export default SectionInit;