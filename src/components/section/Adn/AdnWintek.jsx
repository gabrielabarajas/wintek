import styles from './AdnWintek.module.css'
import Image from 'next/image';
import imageAdnWintek from '../../../../public/images/imageAdnWintek.jpg';
import Logo from '../../../../public/images/WINTEK-LOGO-crop.png';
import texts from '../../../config/adnWintekTexts.json';
import React from 'react';

function AdnWintek() {
  const textObject = texts;
  
  return (
    <>
    <p className={`title ${styles.title}`}>{textObject[0].title}</p>
    <div className={styles.containerSection}>
        <div className={styles.imagesSection}>
          <Image className={styles.image} src={imageAdnWintek} width={"auto"} height={"auto"} alt='image for the section'/>
          <Image className={styles.logo} src={Logo} width={400} height={200} alt='image´ section'/>
        </div>
        <div className={styles.textSection}>
     
          <p className={`text ${styles.text}`}>{textObject[0].text}</p>
          <p className={`text ${styles.text}`}>{textObject[1].text}</p>
          <p className={`text ${styles.text}`}>{textObject[2].text}</p>
          <p className={`text ${styles.text}`}>{textObject[3].text}</p>
          <p className={`text ${styles.text}`}>{textObject[4].text}</p>
        </div>
    </div>
    </>
  )
}

export default AdnWintek