import { Card } from "react-bootstrap";
import './TextCard.css';


function TextCard({title, text }) {
  return (
    <div>
        <div className="cont-main-section">

        <Card className="cont-main-section-one">
        <Card.Body className="cont-main-section-one">
        
            <p className="txt-title">{title}</p>
            <p className="txt-text">{text}</p> 
        </Card.Body>
        </Card>
    
        </div>
    </div>
  )
}

export default TextCard;