import BlogCard from '../../blogCard/BlogCard';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import styles from "./Conocimiento.module.css";

function Conocimiento({articles}) {
    return (
    <div id="compartimos">
        <div className={styles.containerSection}>
            <p className={`title`}>COMPARTIMOS CONOCIMIENTO</p>
            <Container>
            <Row>
            {
            articles.map((article, index) => <BlogCard key={index} {...article}/>)
            }
            </Row>
            </Container>
        </div>
    </div>
    )
}

export default Conocimiento