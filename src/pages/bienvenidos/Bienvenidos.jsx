import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import TextCard from "../../components/card/TextCard";
import Textos from '../../config/textosBienvenidos.json';

function Bienvenidos() {
  return (
    <div>
        <NavWintek/>
        <div className="cont-main-section">
        <p className="txt-title-section">BIENVENIDOS</p>
        {
        Textos.map((texts, index) => <TextCard key={index} {...texts} />)
        }
        </div>
         <Footer/>
    </div>
  )
}

export default Bienvenidos