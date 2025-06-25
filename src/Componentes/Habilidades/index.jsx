import estilos from "./habilidades.module.css";
import Image from "next/image";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import java from "../../../public/javascript.png";
import react from "../../../public/react.png";
import next from "../../../public/next.png";
import git from "../../../public/git.png";


export default function Habilidades(){
    return(
        <section id="habilidades" className={estilos.habi}>
            <h1>Habilidades</h1>
            <div className={estilos.img}>
                <Image className={estilos.logo} src={html} alt="HTML5"/>
                <Image className={estilos.logo} src={css} alt="CSS"/>
                <Image className={estilos.logo} src={java} alt="JavaScript"/>
                <Image className={estilos.logo} src={react} alt="React"/>
                <Image className={estilos.logo} src={next} alt="Next.js"/>
                <Image className={estilos.logo} src={git} alt="GitHub"/>
            </div>
        </section>
    )
}