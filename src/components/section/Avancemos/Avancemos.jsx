import styles from './Avancemos.module.css'
import Image from 'next/image';
import imageAvancemos from '../../../../public/images/imageAvancemos.jpg';
import texts from '../../../config/avancemosTexts.json';
import { motion } from 'framer-motion';

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
      <motion.div animate={{x:0}} initial={{x:-200}} className={styles.imagesSection}>
          <Image className={styles.image} src={imageAvancemos} width={"auto"} height={"auto"} alt='image for the section'/>
      </motion.div>
    </div>
    </>
    );
  }
  export default Avancemos;