import styles from './Avancemos.module.css'
import Image from 'next/image';
import imageAvancemos from '../../../../public/images/imageAvancemos.jpg';
import texts from '../../../config/avancemosTexts.json';


function Avancemos() {
  const textObject =texts[0];
    
  return (
    <div id="avancemos">
      <div className={styles.containerSection}>
        <div className={styles.textSection}>
          <p className={`title ${styles.title}`}>{textObject.title}</p>
          <p className={`text ${styles.text}`}>{textObject.textOne}</p>
          <p className={`text ${styles.text}`}>{textObject.textTwo}</p>
        </div>
        
        <div className={styles.imagesSection}>
          <Image data-aos="fade-right" className={styles.image} src={imageAvancemos} width={"auto"} height={"auto"} alt='image for the section'/>
        </div>
      </div>
    </div>
    );
  }
  export default Avancemos;