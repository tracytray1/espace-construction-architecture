import { PHOTOS_ABOUT } from "../../assets/images/a-propos/photos-about"

import './AboutPhotos.scss'

const AboutPhotos = () => {
   return (
    <div className="about-photos">
      {PHOTOS_ABOUT.map((photo) => (
        <img key={photo.id} src={photo.title} alt={photo.altTitle}></img>
        ))}
    </div>
 )
}

export default AboutPhotos
