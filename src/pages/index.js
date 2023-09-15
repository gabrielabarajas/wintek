{/*import Section from '../components/section/Section';
import sections from '../config/sections.json';}*/}
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer/Footer';
import Bienvenidos from '../components/section/Bienvenidos/Bienvenidos';
import Avancemos from '../components/section/Avancemos/Avancemos';
import Transformamos from '../components/section/Transformamos/Transformamos';
import AdnWintek from '../components/section/AdnWintek/AdnWintek';
import Inicia from '@/components/section/Inicia/Inicia';
import Vive from '@/components/section/Vive/Vive';
import Contacta from '@/components/section/Contacta/Contacta';
import Navbar from '../components/navbar/Navbar'

function Home() {
  return (
      <>
        <Navbar/>
        <Bienvenidos/>
        <Avancemos/>
        <AdnWintek/>
        <Transformamos/>
        <Inicia/>
        <Vive/>
        <Contacta/>
        <Footer/>
      </>
  )
}

export default Home