import styles from './Footer.module.css';
import Image from 'next/image'
import { Navbar } from 'react-bootstrap';
import fbImage from '../../../public/images/fb-icono.png';
import lnImage from '../../../public/images/in-icono.png';
import inImage from '../../../public/images/Insta-icono.png';

function Footer() {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.adress}>
        <p className={`title ${styles.textHeading}`}>Wintek Consulting Group</p>
        <p className={`text ${styles.textLine}`}>Provenza 310</p>
        <p className={`text ${styles.textLine}`}>Barcelona, España</p>
        <p className={`text ${styles.textLine}`}>08037</p>
      </div>

      <div className={styles.containerContacto}>
        <p className={styles.textLine}>info@wintek.consulting</p>
        <div className={styles.logosSocial}>
          <Navbar.Brand href="https://www.linkedin.com/">
            <Image className={styles.iconSocial} src={lnImage} alt="logo linkedin" width={40} height={40} />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.facebook.com/">
            <Image className={styles.iconSocial} src={fbImage} alt="logo facebook" width={40} height={40}/>
          </Navbar.Brand>
          <Navbar.Brand href="https://www.instagram.com/">
            <Image className={styles.iconSocial} src={inImage} alt="logo instagram" width={40} height={40}/>
          </Navbar.Brand>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer