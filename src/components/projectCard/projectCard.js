import './projectCard.css'

function ProjectCard(props) {

  return (
        <div className="card">
          <div className="project">
            <a target="_blank" rel="noreferrer" className="content" href={props.site} 
            style={{backgroundImage:'url( ' + props.imgPath + ')'}}>
                <h2>{props.title}</h2>
                <p>{props.discription}</p>
            </a>
          </div>
        </div>

   
  );
}

export default ProjectCard;