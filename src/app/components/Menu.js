import Link from "next/link";

export default function Menu(){
    return(
        <header>
            <h3>My litlle things</h3>
                <nav>
                    <ul>
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