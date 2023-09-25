import styles from './Footer.module.css';
import Image from 'next/image'
import { Navbar } from 'react-bootstrap';
import logoImage from '../../../public/images/wWinte.png';
import fbImage from '../../../public/images/fb-icono.png';
import lnImage from '../../../public/images/in-icono.png';
import inImage from '../../../public/images/Insta-icono.png';

function Footer() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.logoW}>
        <Image src={logoImage} alt="logo image" width={"80"} height={"80"} />
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