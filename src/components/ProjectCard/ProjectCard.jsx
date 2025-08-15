const ProjectCard = ({project}) => {
  const {imageUrl, title} = project;
  return (
    <div className='project-item'>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="project-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default ProjectCard
