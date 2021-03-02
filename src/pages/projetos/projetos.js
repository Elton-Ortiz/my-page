import './projetos.css'
import ProjectCard from '../../components/projectCard/projectCard'
import ImgSiteReact from '../../assets/img/reactLogo.png'
import ImgForm from '../../assets/img/form.png'
import ImgRockPaperScissors from '../../assets/img/javaRecorted.png'



function projetos() {
  const projects = {
  siteReact:{
    name:"Site React",
    discription:"Uma copia do site do React,js, feito com React.",
    backgrundImage:ImgSiteReact,
    site:"https://copiasitereactjs.netlify.app/"
  },
  form:{
    name:"Form",
    discription:"Formulario de cadastro, feito com React.",
    backgrundImage:ImgForm,
    site:"https://siteform.netlify.app/"
  },
  RockPaperScissors:{
    name:"Rock Paper Scissors",
    discription:"Jogo Pedra Papel Tesoura feito em Java",
    backgrundImage:ImgRockPaperScissors,
    site:"https://github.com/Elton-Ortiz/PedraPapelTesoura"
  }
}



    return (
      <main className="projects">
      <section>
        <ProjectCard 
        title={projects.siteReact.name}
        discription={projects.siteReact.discription} 
        imgPath={projects.siteReact.backgrundImage}
        site={projects.siteReact.site}>
        </ProjectCard>
        
        <ProjectCard 
        title={projects.form.name}
        discription={projects.form.discription} 
        imgPath={projects.form.backgrundImage}
        site={projects.form.site}>
        </ProjectCard>

        <ProjectCard 
        title={projects.RockPaperScissors.name}
        discription={projects.RockPaperScissors.discription} 
        imgPath={projects.RockPaperScissors.backgrundImage}
        site={projects.RockPaperScissors.site}>
        </ProjectCard>

       
      </section>
    </main>
    );
  }
  
  export default projetos;