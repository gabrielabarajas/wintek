import Image from 'next/image';
import Link from 'next/link';
import styles from './Section.module.css';

function WintekSection({ title, imageSection, buttonText, linkPage, fewWords}) {
  return (
    <>
      <div className="container">
      <div className={styles.containerSection}>
          <p className={`title ${styles.title}`}>{title}</p>
          <Image className={styles.image} src={imageSection} width={800} height={400} alt='image for the section'/>
          <p className={`text ${styles.text}`}>{fewWords}</p>
          <Link className={styles.button} href={linkPage}>
          {buttonText}
          </Link>
      </div>
      </div>
    
    </>
      
  );
}
export default WintekSection;
