import { useParams } from 'react-router-dom';
import projectsData from '../../projects-data';

const Projet = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.texte}</p>
    </div>
  );
}

export default Projet
