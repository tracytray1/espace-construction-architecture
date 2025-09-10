import './ProjectHero.scss'

const ProjectHero = ({ imageUrl, title, imageUrlDuo }) => {
  return (
    <div className='project-detail_hero'>
      {imageUrlDuo ? (
        <img
          key={i}
          src={imageUrlDuo}
          alt={`${title} - visuel ${i + 1}`}
          className="project-detail_image"
            />
          ) : (
      <img
        src={imageUrl}
        alt={title}
        className="project-detail_image"
      />)}
    </div>
  )
}

export default ProjectHero
