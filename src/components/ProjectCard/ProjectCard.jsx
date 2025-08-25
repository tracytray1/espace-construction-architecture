import { useState } from 'react'
import { Link } from 'react-router-dom';

import './ProjectCard.scss'

const ProjectCard = ({ project, allImagesLoaded }) => {
  const { imageUrl, title, id } = project;

  const [isHovered, setIsHovered] = useState(false);

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
      <Link to={`/projects/${id}`}>
        <img
          src={imageUrl}
          alt={title}
          width={800} height={600}
          className={`project-image ${allImagesLoaded ? 'loaded' : ''}`}
        />

        <div
          className={`overlay ${isHovered ? 'visible' : ''}`}
          aria-hidden="true"
        />


        <div className={`project-body-container ${isHovered ? 'visible' : ''}`}>
          <h2>{title}</h2>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard
