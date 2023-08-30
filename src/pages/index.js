{/*import Section from '../components/section/Section';
import sections from '../config/sections.json';}*/}
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer/Footer';
import SectionInit from '../components/section/Inicial/SectionInit';
import Avancemos from '../components/section/Avancemos/Avancemos';
import Transformamos from '../components/section/Transformamos/Transformamos';
import AdnWintek from '../components/section/Adn/AdnWintek';

function Home() {
  return (
    <>
      <div className="content">
        {/*{sections.map((section, index) => <Section key={index} {...section} />)}*/}
        <SectionInit/>
        <Avancemos/>
        <AdnWintek/> 
        <Transformamos/>
        <Footer/>
      </div>
    </>
  )
}

export default Home