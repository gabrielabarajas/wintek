import styles from './Bienvenidos.module.css';
import objects from '../../../config/transformamosTexts.json';
import WelcomeCard from '../../card/WelcomeCard'


function Bienvenidos() {
  const infoObjects = objects;
  return (
    <div className={styles.containerSection} id="bienvenidos" >
       <WelcomeCard text={infoObjects[0].text} image={infoObjects[0].image}/>
       <WelcomeCard text={infoObjects[1].text} image={infoObjects[1].image}/>
       <WelcomeCard text={infoObjects[2].text} image={infoObjects[2].image}/>
       <WelcomeCard text={infoObjects[3].text} image={infoObjects[3].image}/>
    </div>
  
  );
}
export default Bienvenidos;