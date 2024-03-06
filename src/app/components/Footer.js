import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
    <Image className="moodle"
      width={140} 
      height={100}
      src={"https://www.ifms.edu.br/acesso-a-sistemas/imagens/moodle/@@images/image/preview"}></Image>
      <br></br>
      <Link href="https://ead.ifms.edu.br/">Moodle</Link>
        </footer>
    )
}