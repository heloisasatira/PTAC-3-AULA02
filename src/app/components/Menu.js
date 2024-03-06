import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
     <Image
      width={100} 
      height={100}
      src={"https://www.ifms.edu.br/marcaifms.png"} />
      
            <h3 class="cabecalho">My litlle things</h3>
                <nav>
                    <ul class="listas">
                        <Link href="/">
                           <li>Rise and shinee</li>
                        </Link>
                        <Link href="/">
                           <li>Pick me! choose me! love me!</li>
                        </Link>
                        <Link href="/">
                           <li>How I love being a WOMAN</li>
                        </Link>
                    </ul>
                </nav>
        </header>
    );
}