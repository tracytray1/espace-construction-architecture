import './ProjectHero.scss'

const ProjectHero = ({ imageUrl, title }) => {
  return (
    <div className='project-detail_hero'>
      <img
        src={imageUrl}
        alt={title}
        className="project-detail_image"
      />
    </div>
  )
}

export default ProjectHero
