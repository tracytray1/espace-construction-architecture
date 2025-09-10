import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoEspaceConstructionSansTexte from '../../assets/logo-espace-construction-blanc.svg?react';
import './InternalLinks.scss';

const InternalLinks = ({ allProjects, foundProject }) => {
  // On trouve l'index du projet actuel
  const currentIndex = allProjects.findIndex(p => p.id === foundProject.id);

  // On prend les 4 projets suivants (en évitant les erreurs si on arrive à la fin du tableau)
  let relatedProjects = [];

  if (currentIndex !== -1) {
    // On prend les projets après le projet actuel
    const projectsAfter = allProjects.slice(currentIndex + 1);

    // Si on n'a pas assez de projets après, on prend aussi ceux d'avant
    if (projectsAfter.length < 4) {
      const projectsBefore = allProjects.slice(0, currentIndex);
      relatedProjects = [...projectsAfter, ...projectsBefore].slice(0, 4);
    } else {
      relatedProjects = projectsAfter.slice(0, 4);
    }
  }

  // Si on n'a pas de projets associés, on prend les 4 premiers
  if (relatedProjects.length === 0) {
    relatedProjects = allProjects.slice(0, 4);
  }

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
  const { imageUrl, projet, ville, id } = project;
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
        <Link to={`/projets/${id}`} onClick={() => window.scrollTo(0, 0)} >
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
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InternalLinks;
