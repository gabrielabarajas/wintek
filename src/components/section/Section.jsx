import Image from 'next/image';
import styles from './Section.module.css';

function WintekSection({ title, imageSection, buttonText, linkPage}) {
  return (
    <>
      <div className={styles.container}>
     
          <p className={styles.title}>{title}</p>
          <Image className={styles.image} src={imageSection} width={800} height={400} alt='image for the section'/>
          <a href={linkPage} >
            <button className={styles.button}>{buttonText}</button>
          </a>
        </div>
    
    </>
      
  );
}
export default WintekSection;
