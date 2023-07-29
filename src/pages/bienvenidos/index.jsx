import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/Navbar";
import TextCard from "../../components/textCard/TextCard";
import Textos from '../../config/textosBienvenidos.json';
import styles from "./Bienvenidos.module.css";

function Bienvenidos() {
  return (
    <div>
        <NavWintek/>
        <div className={styles.container}>
        <p className={`title ${styles.titlePage}`}>BIENVENIDOS</p>
        {
        Textos.map((texts, index) => <TextCard key={index} {...texts} />)
        }
        </div>
         <Footer/>
    </div>
  )
}

export default Bienvenidos