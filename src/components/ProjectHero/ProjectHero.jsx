import './ProjectHero.scss'

const ProjectHero = ({ imageUrl, title, imageUrlHero }) => {
  return (
    <div className='project-detail_hero'>
      {imageUrlHero ? (
        <img
          src={imageUrlHero}
          alt={title}
          className="project-detail_image"
        />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="project-detail_image"
        />
      )}
    </div>
  )
}

export default ProjectHero
