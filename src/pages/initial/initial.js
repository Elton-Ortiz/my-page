import './initial.css'
import ProjectCard from '../../components/projectCard/projectCard'
import ImgSiteReact from '../../assets/img/reactLogo.png'
import ImgForm from '../../assets/img/form.png'

function Initial() {
  
  const projects = {
    siteReact:{
      name:"Site React",
      discription:"Uma copia dosite do React,js, feito com React.",
      backgrundImage:ImgSiteReact,
      site:"https://copiasitereactjs.netlify.app/"
    },
    form:{
      name:"Form",
      discription:"Formulario de cadastro, feito com React.",
      backgrundImage:ImgForm,
      site:"https://siteform.netlify.app/"
    }
  }

  const leftCurlyBrace = '{';
  const rightCurlyBrace = '}';

  return (
    <main className="initial">
      <section>
        <ProjectCard 
        title={projects.siteReact.name}
        discription={projects.siteReact.discription} 
        imgPath={projects.siteReact.backgrundImage}
        site={projects.siteReact.site}>

        </ProjectCard>
        <div className="card">
          <div>
          <span>
            <p className="class">.atualmente </p>
            <p>{leftCurlyBrace}</p>
          </span>
          <span className="whitespancing">
            <p className="attribute">lendo</p>
            <p>: </p>
            <p className="value">css grid layout</p>
            <p> ;</p>
          </span>
          <span className="whitespancing">
            <p className="attribute">assistindo</p>
            <p>: </p>
            <p className="value">vidrados</p>
            <p> ;</p>
          </span>
          <span className="whitespancing">
            <p className="attribute">jogando</p>
            <p>: </p>
            <p className="value">oad</p>
            <p> ;</p>
          </span>
          <span className="whitespancing">
            <p className="attribute">estudando</p>
            <p>: </p>
            <p className="value">svg</p>
            <p> ;</p>
          </span>
          <span className="whitespancing">
            <p className="attribute">praticando</p>
            <p>: </p>
            <p className="value">corrida 5km</p>
            <p> ;</p>
          </span>
          <p>{rightCurlyBrace}</p>
          </div>
        </div>
        <ProjectCard 
        title={projects.form.name}
        discription={projects.form.discription} 
        imgPath={projects.form.backgrundImage}
        site={projects.form.site}>
        </ProjectCard>
      </section>
    </main>
  );
}

export default Initial;