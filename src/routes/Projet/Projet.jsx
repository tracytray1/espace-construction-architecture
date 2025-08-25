import { useParams } from 'react-router-dom';
import { PROJECTS_DATA } from '../../projects-data';

const Projet = () => {
  const { id } = useParams();
  const foundProject = PROJECTS_DATA.find(p => p.id === parseInt(id));

  if (!foundProject) return <p>Projet non trouvé</p>;

  return (
    <div>
      <h1>{foundProject.title}</h1>
      <img src={foundProject.imageUrl} alt={foundProject.title} />
      <p>{foundProject.texte}</p>
    </div>
  );
}

export default Projet
