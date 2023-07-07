import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ image, title, date, linkPage, subtitle }) {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <a href={linkPage}>
            <Button variant="primary" className="bttnSection">Leer más</Button>
          </a>
          <Card.Text>{subtitle}</Card.Text>
          <Card.Footer/>
        </Card.Body>
      </Card>
    );
  }

export default BlogCard