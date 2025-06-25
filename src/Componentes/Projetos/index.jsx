import estilos from "./projetos.module.css";
import Image from "next/image";
import res from "../../../public/proj_rest.png";
import yas from "../../../public/proj_yasmin.png";

export default function Projetos() {
  return (
    <section className={estilos.proj}>
      <h1>Projetos</h1>
      <div className={estilos.cards}>
        <div className={estilos.card}>
          <Image className={estilos.foto} src={res} alt="Projeto Cardápio" />
          <p>Projeto de um cardápio (estudo)</p>
          <a
            href="https://github.com/alestruchel/cardapio/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={estilos.botao}>Ver Projeto</button>
          </a>
        </div>

        <div className={estilos.card}>
          <Image className={estilos.foto} src={yas} alt="Projeto Yasmin" />
          <p>Projeto universitário</p>
          <a
            href="https://github.com/alestruchel/universit-rio/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={estilos.botao}>Ver Projeto</button>
          </a>
        </div>
      </div>
    </section>
  );
}