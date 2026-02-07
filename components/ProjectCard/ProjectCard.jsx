
'use client';
import { useState } from 'react';
import Link from 'next/link';
import './ProjectCard.scss';

const ProjectCard = ({ project, allImagesLoaded, index }) => {
  const { imageUrl, projet, ville, description, slug } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClickMobile = (e) => {
    if (window.innerWidth <= 768 && !isActive) {
      e.preventDefault();
      setIsActive(true);
    }
  };

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
        <Link href={`/projets/${slug}`} onClick={handleClickMobile}>
          <div className="image-wrapper">
            <img
              src={imageUrl}
              alt={`${projet} - ${ville}`}
              width={800}
              height={600}
              className={`project-image ${allImagesLoaded ? 'loaded' : ''}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />

            <div
              className={`overlay ${isHovered ? 'visible' : ''}`}
              aria-hidden="true"
            />

            <div className={`project-body-container ${isHovered ? 'visible' : ''}`}>
              <div className="project-body-container-logo">
                <img
                  src="/logo-espace-construction-blanc.svg"
                  alt="Logo ECA"
                  width={50}
                  height={50}
                  className="project-body-container-logo"
                />
              </div>
              <div className="project-body-container-detail">
                <p>{projet}</p>
                <p>{ville}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
