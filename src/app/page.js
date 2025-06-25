import Topo from "@/Componentes/Topo";
import Banner from "@/Componentes/Banner";
import Sobre from "@/Componentes/Sobre";
import Habilidades from "@/Componentes/Habilidades";
import Projetos from "@/Componentes/Projetos";
import Contato from "@/Componentes/Contato";

export default function Home() {
  return (
    <div>
      <header>
          <Topo/>
      </header>
      <main>
          <Banner/>
          <Sobre/>
          <Habilidades/>
          <Projetos/>
      </main>
      <footer>
          <Contato/>
      </footer>
    </div>
    
  );
}
