import './ProjectHeader.scss'

const ProjectHeader = ({project, city, description}) => {
  return (
    <div className='projet-detail_header'>
      <div className='projet-detail_header-info'>
        <h2 className='projet-detail_nom'>{project}</h2>
        <p className='projet-detail_ville'>{city}</p>
      </div>
      <div className='projet-detail_header-description'>
        <p className='projet-detail_description'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectHeader
