import styles from './Transformamos.module.css'
import Image from 'next/image';
import Logo from '../../../../public/images/WINTEK-LOGO-crop.png';
import texts from '../../../config/transformamosTexts.json';
import React from 'react';
import TransformamosCard from './TransformamosCard';

function Transformamos() {
  const textObject =texts;
  console.log(textObject);
  return (
    <>
    <p className={`title ${styles.title}`}>{textObject[0].title}</p>
    <div className={styles.containerSection}>
    <div className={styles.cardsSection}>
      {
        textObject.map((text, index) => <TransformamosCard key={index} {...text}/>)
       }
    </div>
      <Image className="logo" src={Logo} width={400} height={200} alt='image´ section'/>
    </div>
    </>
  )
}

export default Transformamos