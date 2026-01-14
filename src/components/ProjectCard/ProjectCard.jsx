import { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoEspaceConstructionSansTexte from '../../assets/logo-espace-construction-blanc.svg?react';


import './ProjectCard.scss'

const ProjectCard = ({ project, allImagesLoaded, index }) => {
  const { imageUrl, projet, ville, description, id, slug } = project;
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
      className={`project-item ${allImagesLoaded ? 'loaded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <Link to={`/projets/${slug}`} onClick={handleClickMobile}>
          <div className="image-wrapper">
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
              <div className='project-body-container-logo'>
                <LogoEspaceConstructionSansTexte />
              </div>
              <div className='project-body-container-detail'>
                <p>{projet}</p>
                <p>{ville}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );}

export default ProjectCard
