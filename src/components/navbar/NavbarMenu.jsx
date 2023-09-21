import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image';
import Logo from '../../../public/images/WINTEK-LOGO-crop.png';
import styles from './Navbar.module.css';

function NavbarMenu() {
  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Image  className= {styles.navbarLogo}src={Logo} alt="logo empresa" width={220} height={60} />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#inicio" onClick={() => scrollTo('#bienvenidos')}>Inicio</Nav.Link>
                <Nav.Link href="#avancemos" onClick={() => scrollTo('#avancemos')}>Avancemos juntos</Nav.Link>
                <Nav.Link href="#adnWintek" onClick={() => scrollTo('#adnWintek')}>ADN Wintek</Nav.Link>
                <Nav.Link href="#" onClick={() => scrollTo('#transformamos')}>¿Que hacemos?</Nav.Link>
                <Nav.Link href="#iniciaCamino" onClick={() => scrollTo('#iniciaCamino')}>Solicita información</Nav.Link>
                <Nav.Link href="#contactanos" onClick={() => scrollTo('#compartimos')}>Blog</Nav.Link>
                <Nav.Link href="#contactanos" onClick={() => scrollTo('#contacta')}>Contáctanos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarMenu;