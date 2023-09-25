import styles from './AdnWintek.module.css'
import Image from 'next/image';
import imageAdnWintek from '../../../../public/images/imageAdnWintek.jpg';
import texts from '../../../config/adnWintekTexts.json';
import React from 'react';

function AdnWintek() {
  const textObject = texts;
  
  return (
    <div className={styles.containerSection} id='adnWintek'>
        <div className={styles.imagesSection}>
        <p className={`title ${styles.title}`}>{textObject[0].title}</p>
          <Image data-aos="fade-left" className={styles.image}  src={imageAdnWintek} width={"auto"} height={"auto"} alt='image for the section'/>
        </div>
        <div className={styles.textSection}>
          <div className={styles.adnImgTxt}>
          <span className={styles.imageContainer}>
            <Image className={styles.adnImage} fill src={textObject[0].image} alt='adn image'/>
          </span>
            <p className={`text ${styles.text}`}>{textObject[0].text}</p>
            <span class={styles.line}></span>
          </div>
          <div className={styles.adnImgTxt}>
          <span className={styles.imageContainer}>
            <Image className={styles.adnImage} fill src={textObject[1].image} alt='adn image'/>
          </span>
            <p className={`text ${styles.text}`}>{textObject[1].text}</p>
          </div>
          <div className={styles.adnImgTxt}>
          <span className={styles.imageContainer}>
            <Image className={styles.adnImage} fill src={textObject[2].image} alt='adn image'/>
          </span>
            <p className={`text ${styles.text}`}>{textObject[2].text}</p>
          </div>
          <div className={styles.adnImgTxt}>
          <span className={styles.imageContainer}>
            <Image className={styles.adnImage} fill src={textObject[3].image} alt='adn image'/>
          </span>
            <p className={`text ${styles.text}`}>{textObject[3].text}</p>
          </div>
          <div className={styles.adnImgTxt}>
          <span className={styles.imageContainer}>
            <Image className={styles.adnImage} fill src={textObject[4].image} alt='adn image'/>
          </span>
            <p className={`text ${styles.text}`}>{textObject[4].text}</p>
          </div>
        </div>
    </div>
  )
}

export default AdnWintek