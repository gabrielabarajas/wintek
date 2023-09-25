import { getArticles } from '../utils/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenidos from '../components/section/Bienvenidos/Bienvenidos';
import Avancemos from '../components/section/Avancemos/Avancemos';
import AdnWintek from '../components/section/AdnWintek/AdnWintek';
import Inicia from '../components/section/Inicia/Inicia';
import Conocimiento from '../components/section/Conocimiento/Conocimiento.jsx';
import NavbarMenu from '../components/navbar/NavbarMenu';
import Footer from '@/components/footer/Footer';

function Home({articles}) {
  return (
      <>
        <NavbarMenu/>
        <Bienvenidos/>
        <AdnWintek/>
        <Avancemos/>
        <Inicia/>
        <Conocimiento articles={articles}/>
        <Footer/>
      </>
  )
}

export default Home

export async function getStaticProps() {
  const articles = await getArticles(1);
  return {
    props: { articles },
  };
}