import BlogCard from '../../blogCard/BlogCard';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function Conocimiento({articles}) {
    return (
        <div>
            <p>COMPARTIMOS CONOCIMIENTO</p>
           <Container>
           <Row>
          {
            articles.map((article, index) => <BlogCard key={index} {...article}/>)
           }
           </Row>
           </Container>
        </div>
    )
}

export default Conocimiento