import estilos from "./sobre.module.css";

export default function Sobre(){
    return(
        <section id="sobre" className={estilos.sobre}>
            <div className={estilos.texto}>    
                <h1>Sobre Mim</h1>
                <p>Eu sou Alessandro, desenvolvedor front-end e apaixonado por criar interfaces que fazem sentido e funcionam de verdade.
                    Gosto de transformar ideias em telas bonitas (e úteis), usando tecnologias como HTML, CSS, JavaScript, React e Next.js.
                    Sempre fui curioso com tecnologia e design, e acabei encontrando no front-end o lugar perfeito pra juntar lógica e criatividade.
                    No dia a dia, estou sempre estudando algo novo, testando uns códigos malucos e melhorando projetos antigos.
                    Se quiser trocar uma ideia, ver meus projetos ou mandar um desafio, só chegar. Vai ser um prazer compartilhar essa jornada!
                </p>
            </div>    
        </section>
    )
}