import estilos from "./contato.module.css";
import Image from "next/image";
import email from "../../../public/email.png";
import telefone from "../../../public/telefone.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";

export default function Contato(){
    return(
        <section id="contatos" className={estilos.rodape}>
            <h1>Contatos</h1>
            <div className={estilos.cont}>
                <div className={estilos.bloco}>
                    <a href="mailto:alestruchel@gmail.com">
                    <Image src={email} alt="Email"/>
                    <p>alestruchel@gmail.com</p>
                    </a>
                </div>
                <div className={estilos.bloco}>
                    <a href="https://wa.me/5511963079996" target="_blank">
                    <Image src={telefone} alt="Email"/>
                    <p>(11)96307-9996</p>
                    </a>
                </div>
                <div className={estilos.bloco}>
                    <a href="https://www.linkedin.com/in/alestruchel/" target="_blank">
                    <Image src={linkedin} alt="Email"/>
                    <p>@alestruchel</p>
                    </a>
                </div>
                <div className={estilos.bloco}>
                    <a href="https://github.com/alestruchel?tab=repositories" target="_blank">
                    <Image src={github} alt="Email"/>
                    <p>@alestruchel</p>
                    </a>
                </div>
            </div>
        </section>
    )
}