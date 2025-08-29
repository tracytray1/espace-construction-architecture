import { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoEspaceConstructionSansTexte from '../../assets/logo-espace-construction-blanc.svg?react';


import './ProjectCard.scss'

const ProjectCard = ({ project, allImagesLoaded }) => {
  const { imageUrl, projet, ville, id } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClickMobile = (e) => {
    if (window.innerWidth <= 768 && !isActive) {
      e.preventDefault();
      setIsActive(true);
      }
    }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='project-item'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <Link to={`/projets/${id}`} onClick={handleClickMobile}>
          <img
            src={imageUrl}
            alt={projet}
            width={800} height={600}
            className={`project-image ${allImagesLoaded ? 'loaded' : ''}`}
          />

        <div
          className={`overlay ${isHovered ? 'visible' : ''}`}
          aria-hidden="true"
        />

        <div className={`project-body-container ${isHovered ? 'visible' : ''}`}>
            <LogoEspaceConstructionSansTexte/>
            <p>{projet}</p>
            <p>{ville}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard
