import styles from './Navbar.module.css';
import LanguageOption from './LanguageOption';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import menuButton from '../../../public/images/elipse-menu.png';
import Brand from '../../../public/images/wintek-logo-last-modified.png';


function NavWintek() {
  return (
    <>
    <div className={styles.container}>
      
      <Link className={styles.brand} href="/"> 
          <Image  src={Brand} alt="logo empresa" width={110} height={40} />
      </Link>

      <div className={styles.options}>

          <LanguageOption/>
          
          <Button className={styles.button} variant="light" >
              <Image src={menuButton} alt="icono menu" width={30} height={30}/>
          </Button>
      </div>
      
    </div>
    </>
  )
}

export default NavWintek