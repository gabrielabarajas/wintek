import Image from 'next/image';
import MainImage from '../../../../public/images/MainImage.jpg';
import styles from './SectionInit.module.css';
import { motion } from "framer-motion"

function SectionInit() {
  return (
    <>
    <div className={styles.containerSection}>
      <div className={styles.textSection}>
          <p className={styles.title}>EXPERIENCIA</p> 
          <p className={styles.title}>TECNOLOGIA</p> 
          <p className={styles.title}>LIDERAZGO</p> 
      </div>
      <motion.div animate={{x:0}} initial={{x:-200}} className={styles.imagesSection}>
          <Image className={styles.image} src={MainImage} width={800} height={400} alt='image for the section'/>
      </motion.div>
    </div>
    </>
      
  );
}
export default SectionInit;