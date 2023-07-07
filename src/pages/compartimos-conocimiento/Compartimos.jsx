import NavWintek from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Compartimos.css';
import "../../components/card/TextCard.css";
import BlogCard from '../../components/card/BlogCard';
import BlogCards from '../../config/blogCards.json';

function Compartimos() {
  return (
    <div>
        <NavWintek/>
        <div className="cont-main-section">
            <p className="txt-title-section">COMPARTIMOS CONOCIMIENTO</p>
            <div className="cont-main-section-one">
            {
                BlogCards.map((blogcard, index) => <BlogCard key={index} {...blogcard}/>)
            }
            </div>

        </div>
         <Footer/>

    </div>
  )
}

export default Compartimos