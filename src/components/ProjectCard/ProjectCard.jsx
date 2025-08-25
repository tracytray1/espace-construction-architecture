const ProjectCard = ({project, allImagesLoaded}) => {
  const {imageUrl, title} = project;
  return (
    <div className='project-item'>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: allImagesLoaded ? 1 : 0,
          transition: 'opacity 300ms ease'
        }}
      />
      <div className="project-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default ProjectCard
