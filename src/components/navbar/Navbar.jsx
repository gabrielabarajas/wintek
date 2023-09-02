import styles from './Navbar.module.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Brand from '../../../public/images/logoNavbar.png';
// import languageButton from '../../../public/images/wintek-language-2.png';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavWintek() {
  return (
    <>
    <div className={styles.container}>
      
      <Navbar bg="light" data-bs-theme="light">
      <Link className={styles.brand} href="/">
          <Image  className= {styles.navbarLogo}src={Brand} alt="logo empresa" width={220} height={60} />
      </Link>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Navbar>
      
    </div>
    </>
  )
}

export default NavWintek