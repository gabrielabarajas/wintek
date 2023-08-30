import styles from './Avancemos.module.css'
import Image from 'next/image';
import imageAvancemos from '../../../../public/images/imageAvancemos.jpg';
import Logo from '../../../../public/images/WINTEK-LOGO-crop.png';
import texts from '../../../config/avancemosTexts.json';
import React from 'react';


function Avancemos() {
  const textObject =texts[0];
    
  return (
    <>
    
    <p className={`title ${styles.title}`}>{textObject.title}</p>
    <div className={styles.containerSection}>
      <div className={styles.textSection}>
          <p className={`text ${styles.text}`}>{textObject.textOne}</p>
          <p className={`text ${styles.text}`}>{textObject.textTwo}</p>
      </div>
      <div className={styles.imagesSection}>
          <Image className={styles.image} src={imageAvancemos} width={"auto"} height={"auto"} alt='image for the section'/>
          <Image className={styles.logo}  src={Logo} width={400} height={200} alt='image for the section'/>
      </div>
    </div>
    </>
    );
  }
  export default Avancemos;