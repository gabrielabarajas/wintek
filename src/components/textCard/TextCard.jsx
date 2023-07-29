import { Card } from "react-bootstrap";
import styles from './TextCard.module.css';

function TextCard({title, text}) {
  return (
    <div className="container">
        <Card className={`${styles.containerSection} `}>
        <Card.Body >
            <p className={`title ${styles.title}`}>{title}</p>
            <p className={`text ${styles.text}`}>{text}</p>
        </Card.Body>
        </Card>
    </div>
  );
}

export default TextCard;