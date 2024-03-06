import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
     <Image
      width={100} 
      height={100}
      src={"https://www.ifms.edu.br/marcaifms.png"}/>
      <br></br>
      <h1>Welcome Back!</h1>
                <nav>
                    <ul class="listas">
                        <Link href="https://ead.ifms.edu.br/">
                           <li>Venha para o mundo IFMS!</li>
                        </Link>
                    </ul>
                </nav>
        </header>
    );
}