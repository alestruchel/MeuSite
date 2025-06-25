import estilos from "./topo.module.css";
import Link from "next/link";

export default function Topo(){
    return(
        <header className={estilos.topo}>
            <p className={estilos.port}>Portfólio</p>
            <nav className={estilos.links}>
                <Link className={estilos.link} href="#sobre">Sobre</Link>
                <Link className={estilos.link} href="#habilidades">Habilidades</Link>
                <Link className={estilos.link} href="#contatos">Contatos</Link>
            </nav>
        </header>
    )
}