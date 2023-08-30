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
    <p className={`title ${styles.title}`}>{textObject.title}</p>
    <div className={styles.containerSection}>
      {
        textObject.map((text, index) => <TransformamosCard key={index} {...text}/>)
       }
      <Image className="logo" src={Logo} width={400} height={200} alt='image´ section'/>
    </div>
    </>
  )
}

export default Transformamos