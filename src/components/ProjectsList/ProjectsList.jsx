import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectsList = ({projects}) => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsList
