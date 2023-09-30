import styles from './AdnWintek.module.css'
import Image from 'next/image';
import imageAdnWintek from '../../../../public/images/imageAdnWintek.jpg';
import content from '../../../config/adnWintekTexts.json';
import React from 'react';

const { featured, items } = content;

function AdnWintek() {
  return (
    <div className={styles.containerSection} id='adnWintek'>
        <div className={styles.imagesSection}>
          <p className={`title ${styles.title}`}>{featured.title}</p>
          <Image data-aos="fade-left" className={styles.image} src={imageAdnWintek} width={"auto"} height={"auto"} alt='image for the section'/>
        </div>
        <div className={styles.textSection}>
          {
            items.map((content, index) => (
              <div key={index} className={styles.adnImgTxt}>
                <span className={styles.imageContainer}>
                  <img className={styles.adnImage} fill src={content.image} alt={content.text}/>
                </span>
                  <p className={`text ${styles.text}`}>{content.text}</p>
                  <span class={styles.line}></span>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AdnWintek