import { motion } from "motion/react"
import './ProjectDetailPhotos.scss'

const ProjectDetailPhotos = ({photos, project}) => {
  return (
    <div className='projet-detail_photos'>
      {photos.map((photo, i) => (
        <motion.img
          key={i}
          src={photo}
          alt={`photo du projet ${project}`}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        />
      ))}
    </div>
  )
}

export default ProjectDetailPhotos
