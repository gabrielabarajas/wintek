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
          <Image className={styles.logo} src={Logo} width={400} height={200} alt='adn image'/>
        </div>
        <div className={styles.textSection}>
          <div className={styles.adnImgTxt}>
            <Image className={styles.adnImage} src={textObject[0].image} width={200} height={100} alt='adn image'/>
            <p className={`text ${styles.text}`}>{textObject[0].text}</p>
            <span class={styles.line}></span>
          </div>
          <div className={styles.adnImgTxt}>
            <Image className={styles.adnImage} src={textObject[1].image} width={200} height={100} alt='adn image'/>
            <p className={`text ${styles.text}`}>{textObject[1].text}</p>
          </div>
          <div className={styles.adnImgTxt}>
            <Image className={styles.adnImage} src={textObject[2].image} width={200} height={100} alt='adn image'/>
            <p className={`text ${styles.text}`}>{textObject[2].text}</p>
          </div>
          <div className={styles.adnImgTxt}>
            <Image className={styles.adnImage} src={textObject[3].image} width={200} height={100} alt='adn image'/>
            <p className={`text ${styles.text}`}>{textObject[3].text}</p>
          </div>
          <div className={styles.adnImgTxt}>
            <Image className={styles.adnImage} src={textObject[4].image} width={200} height={100} alt='adn image'/>
            <p className={`text ${styles.text}`}>{textObject[4].text}</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default AdnWintek