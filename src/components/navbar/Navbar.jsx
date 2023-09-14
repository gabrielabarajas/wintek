import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/WINTEK-LOGO-crop.png';;
import { Navbar, Nav } from 'react-bootstrap';

function NavWintek() {

  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
      <Navbar className={styles.container} bg="light" data-bs-theme="light">
      <Link href="/">
          <Image  className= {styles.navbarLogo}src={Logo} alt="logo empresa" width={220} height={60} />
      </Link>
      <Nav className={styles.options}>
        <Nav.Link href="#inicio" >Inicio</Nav.Link>
        <Nav.Link href="#avancemos">Avancemos juntos</Nav.Link>
        <Nav.Link href="#adnWintek">ADN Wintek</Nav.Link>
        <Nav.Link href="#iniciaCamino" onClick={() => scrollTo('#inicia')}>¿Que hacemos?</Nav.Link>
        <Nav.Link href="#adnwintek">Solicita información</Nav.Link>
        <Nav.Link href="#adnwintek">Contáctanos</Nav.Link>
      </Nav>
      </Navbar>
  )
}

export default NavWintek