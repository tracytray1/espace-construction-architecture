import { useParams } from 'react-router-dom';
import { PROJECTS_DATA } from '../../projects-data';

import './Projet.scss'

const Projet = () => {
  const { id } = useParams();
  const foundProject = PROJECTS_DATA.find(p => p.id === parseInt(id));

  if (!foundProject) return <p>Projet non trouvé</p>;

  return (
    <div className='projet-detail_wrapper'>
      <div className='projet-detail_hero'>
        <img
          src={foundProject.imageUrl}
          alt={foundProject.title}
          className="projet-detail_image"
        />
      </div>
      <div className='projet-detail_header'>
        <p>{foundProject.projet}</p>
        <p>{foundProject.ville}</p>
      </div>
      <div className='projet-detail_body'>
        <p>{foundProject.texte}</p>
      </div>
      <div className='projet-detail_info'></div>
      <div className='projet-detail_footer'></div>

    </div>
  );
}

export default Projet
