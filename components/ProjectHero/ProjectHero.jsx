'use client';

import './ProjectHero.scss'

const ProjectHero = ({ imageUrl, title, imageUrlHero }) => {
  return (
    <div className='project-detail_hero'>
      {imageUrlHero ? (
        <img
          src={imageUrlHero}
          alt={title}
          className="project-detail_image"
          onLoad={() => window.scrollTo(0, 0)}
        />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="project-detail_image"
          onLoad={() => window.scrollTo(0, 0)}
        />
      )}
    </div>
  )
}

export default ProjectHero
