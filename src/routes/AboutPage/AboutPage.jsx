import AboutContent from '../../components/AboutContent/AboutContent'
import AboutPhotos from '../../components/AboutPhotos/AboutPhotos'
import AboutFooter from '../../components/AboutFooter/AboutFooter'
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter'


import './AboutPage.scss'

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-body">
          <AboutPhotos />
          <AboutContent />
        </div>
        <div className="about-footer">
          <AboutFooter />
        </div>
      <ProjectFooter />
      </div>
    </>
  )
}

export default AboutPage
