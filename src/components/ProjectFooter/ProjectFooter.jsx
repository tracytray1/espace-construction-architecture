import { ChevronUp } from "lucide-react";

import './ProjectFooter.scss'

const ProjectFooter = () => {
  return (
    <div className='project-footer'>
      <p>
        <a
          href="#"
          onClick={(e) => {
          e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className='project-footer-link'
          >
          <ChevronUp className="footer-icon" size={22} />
          <span className='footer-text'>HAUT DE PAGE</span>
        </a>
      </p>
    </div>
  )
}

export default ProjectFooter
