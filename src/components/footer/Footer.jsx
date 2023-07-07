import styles from './Footer.module.css';
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <>
    <div className="cont-footer">
      <div className='cont-address'>
        <p className='txt-footer-heading'>Wintek Consulting Group</p>
        <p className='txt-footer-line'>Provenza 310</p>
        <p className='txt-footer-line'>Barcelona, España</p>
        <p className='txt-footer-line'>08037</p>
      </div>
      <div className="cont-contact">
        <p className='txt-footer-line'>info@wintek.consulting</p>
        <div className="cont-logos">
          <Navbar.Brand href="https://www.linkedin.com/">
            <img className= 'navbar-icon-footer' src="/src/images/in-icono.png" alt="logo linkedin" />{' '}
          </Navbar.Brand>
          <Navbar.Brand href="https://www.facebook.com/">
            <img className= 'navbar-icon-footer' src="/src/images/fb-icono.png" alt="logo facebook"/>{' '}
          </Navbar.Brand>
          <Navbar.Brand href="https://www.instagram.com/">
            <img className= 'navbar-icon-footer' src="/src/images/Insta-icono.png" alt="logo instagram"/>{' '}
          </Navbar.Brand>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer