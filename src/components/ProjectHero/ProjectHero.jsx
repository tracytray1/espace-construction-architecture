import './ProjectHero.scss'

const ProjectHero = ({ imageUrl, title, imageUrlDuo }) => {
  return (
    <div className='project-detail_hero'>
      {Array.isArray(imageUrlDuo) ? (
        <div className="project-detail_duo">
          {imageUrlDuo.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} - visuel ${i + 1}`}
              className="project-detail_image"
            />
          ))}
        </div>
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
