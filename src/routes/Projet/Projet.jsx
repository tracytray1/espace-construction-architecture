import { useParams } from 'react-router-dom';
import { PROJECTS_DATA } from '../../projects-data';
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import ProjectDetailPhotos from "../../components/ProjectDetailPhotos/ProjectDetailPhotos";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter'
import './Projet.scss'

const Projet = () => {
  const { id } = useParams();
  const foundProject = PROJECTS_DATA.find(p => p.id === parseInt(id));

  if (!foundProject) return <p>Projet non trouvé</p>;

  return (
    <div className='projet-detail_wrapper'>

      <ProjectHero imageUrl={foundProject.imageUrl} title={foundProject.title} />
      <ProjectHeader project={foundProject.projet} city={foundProject.ville} description={foundProject.description} />

      <div className='projet-detail_body'>
        <p>{foundProject.texte}</p>
      </div>

      <ProjectDetailPhotos photos={foundProject.imagesProjet} project={foundProject.projet} />
      <ProjectInfo foundProject={foundProject} />

      <ProjectFooter />
    </div>
  );
}

export default Projet
