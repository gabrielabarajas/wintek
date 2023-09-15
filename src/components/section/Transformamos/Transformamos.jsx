import styles from './Transformamos.module.css'
import texts from '../../../config/transformamosTexts.json';
import React from 'react';
import TransformamosCard from './TransformamosCard';

function Transformamos() {
  const textObject =texts;
  console.log(textObject);
  return (
    <div id='transformamos'>
    <p className={`title ${styles.title}`}>{textObject[0].title}</p>
    <div className={styles.containerSection}>
      <div className={styles.cardsSection}>
        {
          textObject.map((text, index) => <TransformamosCard key={index} {...text}/>)
        }
      </div>
      </div>
    </div>
  )
}

export default Transformamos