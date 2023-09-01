import styles from './Inicia.module.css'
import Image from 'next/image';
import Logo from '../../../../public/images/WINTEK-LOGO-crop.png';
import ImagenInicia from '../../../../public/images/iniciaImage.jpg';
import texts from '../../../config/iniciaTexts.json'
import FormInicia from '../Inicia/formInicia';

function Inicia() {
  const textObject = texts;
  
  return (
    <>
    <p className={`title ${styles.title}`}>{textObject[0].title}</p>
    <p className={`title ${styles.subtitle}`}>{textObject[0].textOne}</p>
    <p className={`title ${styles.text}`}>{textObject[0].textTwo}</p>
    <div className={styles.containerSection}>
        <div className={styles.imagesSection}>
            <Image className={styles.image} src={ImagenInicia} width={400} height={200} alt='image'/>
            <Image className={styles.logo} src={Logo} width={400} height={200} alt='logo'/>
        </div>
        <div className={styles.textSection}>
          <FormInicia/>
        </div>
    </div>
    </>
  )
}

export default Inicia