import NavWintek from '../../components/navbar/NavbarMenu';
import Footer from '../../components/footer/Footer';
import styles from './Compartimos.module.css';
import BlogCard from '../../components/card/BlogCard';
import BlogCards from '../../config/blogCards.json';

function Compartimos() {
  return (
    <div>
        <NavWintek/>
        <div className="cont-main-section">
            <p className={styles.title}>COMPARTIMOS CONOCIMIENTO</p>
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