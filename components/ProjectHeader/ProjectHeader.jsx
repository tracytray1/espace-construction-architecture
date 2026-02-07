import './ProjectHeader.scss'

const ProjectHeader = ({project, city, description}) => {
  return (
    <div className='project-detail_header'>
      <div className='project-detail_header-info'>
        <h1 className="sr-only">{`${project} : ${description} à ${city}`}</h1>
        <h2 className='project-detail_nom'>{project}</h2>
        <p className='project-detail_ville'>{city}</p>
      </div>
      <div className='project-detail_header-description'>
        <p className='project-detail_description'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectHeader
