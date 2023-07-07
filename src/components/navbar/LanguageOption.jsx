import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import languageButton from '../../../public/images/wintek-language-2.png';
import styles from './Navbar.module.css';

function LanguageOption() {
  return (
    <>
      <Button variant="light" className={styles.button}>
        <Image src={languageButton} alt="icono lenguaje" width={30} height={30} />
      </Button>
    </>
  );
}

export default LanguageOption;