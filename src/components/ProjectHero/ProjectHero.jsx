import './ProjectHero.scss'

const ProjectHero = ({ imageUrl, title }) => {
  return (
    <div className='projet-detail_hero'>
      <img
        src={imageUrl}
        alt={title}
        className="projet-detail_image"
      />
    </div>
  )
}

export default ProjectHero
