import "./quemsou.css"

function QeumSou() {
  const date = new Date();
  
  const now = date.getFullYear();
    return (
      <main className="quemsou">
        
       <p>Me chamo Elton Ortiz ou somente Ton, tenho {now-1990} anos, sou técnico de iluminação, mas atualmente estou focado em iniciar uma carreira como programador.
       </p><p>
Já trabalho como técnico de iluminação a muitos anos, nesse tempo já participei de shows de diversos artistas, e também trabalhei com teatro e exposições, para quem não conhece o mundo da iluminação, ele não parece tão vasto, mas a verdade e que ele é sim, temos muitas coisas envolvidas nessa área, como fixtures, consoles, temperaturas de luz, racks, sistemas dmx, entre outras coisas.
</p><p>
Alguns anos atrás eu decide tentar uma nova carreira, não por insatisfação com a minha atual profissão, mas sim para poder proporcionar, talvez, uma melhor qualidade de vida para mim e para minha família, escolhi programação, por acreditar que tinha um pouco de jeito, já que sempre tive facilidade com computadores, e até mesmo com programação e automação de algumas planilhas no Excel, com o tempo essa escolha veio se mostrando a certa.
</p><p>
Me formei em Análise e Desenvolvimento de Sistemas em 2020, e durante minha faculdade e até hoje eu venho estudando programação religiosamente, inicie com HTML e CSS, passei por um pouco de Javascript e seus frameworks, e hoje me dedico quase que exclusivamente à aprender Java e todo o seu ecossistema.</p>
      </main>
    );
  }
  
  export default QeumSou;