import styles from './Inicia.module.css'
import Image from 'next/image';
import ImagenInicia from '../../../../public/images/iniciaImage.jpg';
import texts from '../../../config/iniciaTexts.json'
import FormInicia from '../Inicia/FormInicia';
import { createContact } from '../../../utils/server/contacts';

function Inicia() {
  const textObject = texts;
  const onSubmit = (data)=>{
  createContact(data)
  }
  return (
    <div id="iniciaCamino">
      <p className={`title`}>{textObject[0].title}</p>
      <p className={`title ${styles.subtitle}`}>{textObject[0].textOne}</p>
      <p className={`title ${styles.text}`}>{textObject[0].textTwo}</p>
      <div className={styles.containerSection}>
          <div className={styles.imagesSection}>
              <Image data-aos="fade-right" className={styles.image} src={ImagenInicia} width={400} height={200} alt='image'/>
          </div>
          <div className={styles.textSection}>
            <FormInicia onSubmit={onSubmit}/>
          </div>
      </div>
    </div>
  )
}

export default Inicia