import AboutContent from '../../components/AboutContent/AboutContent'
import AboutFooter from '../../components/AboutFooter/AboutFooter'
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter'


import './AboutPage.scss'

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-body">
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
