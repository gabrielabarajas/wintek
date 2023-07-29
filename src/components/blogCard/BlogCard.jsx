import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import style from './BlogCard.module.css';

function BlogCard({ imageUrl, title, date, slug, categories, author }) {
  return (
      <Card style={{ width: '20rem'}} className={style.cardStyle}>
        <img src={imageUrl} width={100} height={100} alt="image from blog"/>
        <Card.Body>
          <Card.Title className={style.title}>{title}</Card.Title>
          <Card.Text className= {style.smallText}>{date}</Card.Text>
          <Link className={style.button} href={"/compartimos-conocimiento/" + slug.current}>
            <Button className={style.button}>Leer más</Button>
          </Link>
          <Card.Text className={style.mediumText}>{categories}</Card.Text>
          <Card.Footer>
          <small className={`text-muted mediumText`}>{author}</small>
        </Card.Footer>
        </Card.Body>
      </Card>
    );
  }

export default BlogCard