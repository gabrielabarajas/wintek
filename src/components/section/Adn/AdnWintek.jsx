import styles from './AdnWintek.module.css'
import Image from 'next/image';
import imageAdnWintek from '../../../../public/images/imageAdnWintek.jpg';
import Logo from '../../../../public/images/WINTEK-LOGO-crop.png';
import texts from '../../../config/adnWintekTexts.json';
import React from 'react';

function AdnWintek() {
  const textObject =texts[0];
  
  return (
    <>
    <p className={`title ${styles.title}`}>{textObject.title}</p>
    <div className={styles.containerSection}>
        <div className={styles.imagesSection}>
          <Image className={styles.image} src={imageAdnWintek} width={"auto"} height={"auto"} alt='image for the section'/>
          <Image className="logo" src={Logo} width={400} height={200} alt='image´ section'/>
        </div>
        <div className={styles.textSection}>
          <p className={`text ${styles.text}`}>{textObject.textOne}</p>
          <p className={`text ${styles.text}`}>{textObject.textTwo}</p>
          <p className={`text ${styles.text}`}>{textObject.textThree}</p>
          <p className={`text ${styles.text}`}>{textObject.textFour}</p>
          <p className={`text ${styles.text}`}>{textObject.textFive}</p>
        </div>
    </div>
    </>
  )
}

export default AdnWintek