'use client';

import estilos from "./banner.module.css";

export default function Banner(){
    return(
        <div className={estilos.banner}>  
            <div className={estilos.texto}>
                <h1>Olá, eu sou o Alessandro Struchel</h1>
                <h3>Desenvolvedor Front-End</h3>
            </div>
            <div className={estilos.botao}>
                <a href="/curriculo.pdf" download>
                    <button className={estilos.bot}>
                        Download CV
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/alestruchel/" target="_blank">
                    <button className={estilos.bot}>LinkedIn</button>
                </a>
            </div>
        </div>
    )
}