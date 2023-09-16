import { getArticles } from '../../utils/services';
import Footer from '../../components/footer/Footer';
import BlogCard from '../../components/blogCard/BlogCard';
import styles from './Compartimos.module.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import NavbarMenu from '@/components/navbar/NavbarMenu';

function Compartimos({ articles }) {
  
  
  return (
    <div>
      <NavbarMenu/>
      <p className={`title ${styles.titlePage}`}>COMPARTIMOS CONOCIMIENTO</p>
      <Container className={styles.containerSection}>
        <Row>
        {
          articles.map((article, index) => <BlogCard key={index} {...article}/>)
        }
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}
export default Compartimos

export async function getStaticProps() {
  const articles = await getArticles();
  return {
    props: { articles },
  };
}