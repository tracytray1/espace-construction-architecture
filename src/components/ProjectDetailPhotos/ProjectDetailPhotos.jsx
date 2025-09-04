import { motion } from "motion/react"
import './ProjectDetailPhotos.scss'

const ProjectDetailPhotos = ({photos, project, id}) => {
  const isMaisonSalles = id === 10;

  let normalPhotos = photos;
  let duoPhotos = [];

  if (isMaisonSalles && photos.length >= 2) {
    duoPhotos = photos.slice(-2); // les deux dernières images
    normalPhotos = photos.slice(0, -2); // toutes les autres
  }

  return (
    <div className='projet-detail_photos'>
      {normalPhotos.map((photo, i) => (
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
      {duoPhotos.length > 0 && (
        <div className="project-detail_duo">
          {duoPhotos.map((photo, i) => (
            <motion.img
              key={i}
              src={photo}
              alt={`photo du projet ${project} duo ${i + 1}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectDetailPhotos
