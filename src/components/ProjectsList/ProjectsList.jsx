import { useEffect, useState } from 'react'
import './ProjectsList.scss'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectsList = ({projects}) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)

  useEffect(() => {
    const imageUrls = (projects || []).map((p) => p.imageUrl).filter(Boolean)

    if (imageUrls.length === 0) {
      setAllImagesLoaded(true)
      return
    }

    let isCancelled = false

    const preloadPromises = imageUrls.map((src) => new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => resolve()
      img.src = src
    }))

    Promise.all(preloadPromises).then(() => {
      if (!isCancelled) setAllImagesLoaded(true)
    })

    return () => {
      isCancelled = true
    }
  }, [projects])
  return (
    <div className={`projects-container ${allImagesLoaded ? 'is-loaded' : ''}`} style={{ visibility: allImagesLoaded ? 'visible' : 'hidden' }}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} allImagesLoaded={allImagesLoaded} />
      ))}
    </div>
  )
}

export default ProjectsList
