import Footer from "../../components/footer/Footer";
import NavWintek from "../../components/navbar/NavbarMenu";
import styles from './article.module.css'
import { getArticle, getSlugs } from '../../utils/services';
import { Body } from '../../utils/cms'

function Article({ article }) {
    console.log(article)
  return (
    <>
    <NavWintek/>
    <div className={styles.imageContainer}>
        <img src={article.imageUrl} className={styles.mainImage} width="100%" alt="imagen artículo"/>
        <p className={`title ${styles.articleTitle}`}>{article.title}</p>
    </div>
    <div className={styles.textContainer}>
        <Body blocks={article.bodyRaw} />
    </div>
    <Footer/>
    </>
  )
}

export default Article

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug);
  return {
    props: { article },
  };
}

export async function getStaticPaths() {
    const paths = await getSlugs();
    return {
      paths: paths.map(({ slug }) => ({ params: { slug: slug.current } })),
      fallback: false,
    };
  }