import styles from './Navbar.module.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import menuButton from '../../../public/images/elipse-menu.png';
import Brand from '../../../public/images/logoNavbar.png';
import languageButton from '../../../public/images/wintek-language-2.png';


function NavWintek() {
  return (
    <>
    <div className={styles.container}>
      
      <Link className={styles.brand} href="/">
          <Image  className= {styles.navbarLogo}src={Brand} alt="logo empresa" width={220} height={60} />
      </Link>

      <div className={styles.options}>

      <Button className={styles.button} variant="light">
        <Image className={styles.imageButton} src={languageButton} alt="icono lenguaje" width="auto" height="auto" />
      </Button>
          
      <Button className={styles.button} variant="light" >
          <Image className={styles.imageButton} src={menuButton} alt="icono menu" width="auto" height="auto"/>
      </Button>
      </div>
      
    </div>
    </>
  )
}

export default NavWintek