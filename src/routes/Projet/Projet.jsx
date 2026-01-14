import { useParams } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { PROJECTS_DATA } from '../../projects-data';
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import ProjectDetailPhotos from "../../components/ProjectDetailPhotos/ProjectDetailPhotos";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import InternalLinks from "../../components/InternalLinks/InternalLinks";
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter'
import './Projet.scss'

const Projet = () => {
  const { slug } = useParams();
  const foundProject = PROJECTS_DATA.find(p => p.slug === slug);

  if (!foundProject) {
    return (
      <div className='project-detail_wrapper'>
        <p style={{ padding: '2rem', textAlign: 'center' }}>
          Projet non trouvé
        </p>
      </div>
    );
  }

  usePageMeta({
    title: `${foundProject.projet} — ${foundProject.ville} | Atelier ECA`,
    description: `${foundProject.projet}, ${foundProject.programme} situé à ${foundProject.ville}. Projet d’architecture conçu par l’agence Atelier ECA.`,
  });

  return (
    <div className='project-detail_wrapper'>
      <ProjectHero
        imageUrl={foundProject.imageUrl}
        title={foundProject.title}
        imageUrlHero={foundProject.imageUrlHero}
      />
      <ProjectHeader
        project={foundProject.projet}
        city={foundProject.ville}
        description={foundProject.description}
      />

      <div className='project-detail_body'>
        <p className='project'>{foundProject.texte}</p>
      </div>

      <ProjectDetailPhotos
        photos={foundProject.imagesProjet}
        project={foundProject.projet}
        id={foundProject.id}
      />
      <ProjectInfo foundProject={foundProject} />
      <InternalLinks allProjects={PROJECTS_DATA} foundProject={foundProject} />
      <ProjectFooter />
    </div>
  );
}

export default Projet
