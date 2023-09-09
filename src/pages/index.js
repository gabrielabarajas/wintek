{/*import Section from '../components/section/Section';
import sections from '../config/sections.json';}*/}
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer/Footer';
import SectionInit from '../components/section/Inicial/SectionInit';
import Avancemos from '../components/section/Avancemos/Avancemos';
import Transformamos from '../components/section/Transformamos/Transformamos';
import AdnWintek from '../components/section/Adn/AdnWintek';
import Inicia from '@/components/section/Inicia/Inicia';
import Vive from '@/components/section/Vive/Vive';
import Contacta from '@/components/section/Contacta/Contacta';
import Navbar from '../components/navbar/Navbar'

function Home() {
  return (
    <>
      <div className="content">
        {/*{sections.map((section, index) => <Section key={index} {...section} />)}*/}
        <Navbar/>
        <SectionInit/>
        <Avancemos/>
        <AdnWintek/>
        <Transformamos/>
        <Inicia/>
        <Vive/>
        <Contacta/>
        <Footer/>
      </div>
    </>
  )
}

export default Home