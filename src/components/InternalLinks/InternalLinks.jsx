import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoEspaceConstructionSansTexte from '../../assets/logo-espace-construction-blanc.svg?react';
import './InternalLinks.scss';

const InternalLinks = ({ allProjects, foundProject }) => {
  const currentCategory = foundProject["catégorie"];

  // On filtre les projets ayant la même catégorie, sauf celui en cours
  const relatedProjects = allProjects.filter(
    p => p["catégorie"] === currentCategory && p.id !== foundProject.id
  );
  console.log(relatedProjects)

  return (
    <div className="internal-links">
      <h2>Projets associés</h2>
      <div className="internal-links__list">
        {relatedProjects.map(project => (
          <InternalProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// Composant ProjectCard interne avec le même design que la homepage
const InternalProjectCard = ({ project }) => {
  const { imageUrl, projet, ville, description, id } = project;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="internal-project-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <Link to={`/projets/${slug}`} onClick={() => window.scrollTo(0, 0)} >
          <img
            src={imageUrl}
            alt={projet}
            width={800}
            height={600}
            className="project-image"
          />

          <div
            className={`overlay ${isHovered ? 'visible' : ''}`}
            aria-hidden="true"
          />

          <div className={`project-body-container ${isHovered ? 'visible' : ''}`}>
            <div className='project-body-container-logo'>
              <LogoEspaceConstructionSansTexte/>
            </div>
            <div className='project-body-container-detail'>
              <p>{projet}</p>
              <p>{ville}</p>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InternalLinks;
