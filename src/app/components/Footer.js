import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
    <Image
      width={100} 
      height={100}
      src={"https://www.ifms.edu.br/marcaifms.png"} />
            <h5 class="rodape">All rights reserved</h5>

            <ul className="apps">
                <li>Instagram:</li>
                <li>Twitter:</li>
                <li>Contats:</li>
            </ul>
        </footer>
    )
}