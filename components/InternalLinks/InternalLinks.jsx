'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './InternalLinks.scss';

const InternalLinks = ({ allProjects, foundProject }) => {
  const currentCategory = foundProject['catégorie'];

  const relatedProjects = allProjects.filter(
    (p) => p['catégorie'] === currentCategory && p.id !== foundProject.id
  );

  return (
    <div className="internal-links">
      <h2>Projets associés</h2>
      <div className="internal-links__list">
        {relatedProjects.map((project) => (
          <InternalProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const InternalProjectCard = ({ project }) => {
  const { imageUrl, projet, ville, description, slug } = project;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="internal-project-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <Link href={`/projets/${slug}`} onClick={handleClick}>
          <Image
            src={imageUrl}
            alt={`${projet} - ${ville}`}
            width={800}
            height={600}
            className="project-image"
            sizes="(max-width: 768px) 100vw, 400px"
            quality={85}
          />

          <div
            className={`overlay ${isHovered ? 'visible' : ''}`}
            aria-hidden="true"
          />

          <div className={`project-body-container ${isHovered ? 'visible' : ''}`}>
            <div className="project-body-container-logo">
              <Image
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
        </Link>
      </div>
    </div>
  );
};

export default InternalLinks;
