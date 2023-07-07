import 'bootstrap/dist/css/bootstrap.min.css';
import NavWintek from '../components/navbar/Navbar.jsx'
import Section from '../components/section/Section';
import sections from '../config/sections.json';
import Carrusel from '../components/carrusel/Carrusel';
import Footer from '../components/footer/Footer';


function Home() {
  return (
    <>
      <NavWintek/>
      <Carrusel/>
      {
        sections.map((section, index) => <Section key={index} {...section} />)
      }
      <Footer/>
    </>
  )
}

export default Home