import { ChevronUp } from "lucide-react";

import './ProjectFooter.scss';

const scrollToTopMobile = () => {
  const wrapper = document.querySelector('.project-detail_wrapper');

  // Scroll sur le container principal si existant
  if (wrapper) {
    wrapper.scrollTop = 0;
  }

  // Fallback scroll global
  if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
};


const ProjectFooter = () => {
  return (
    <div className='project-footer'>
      <p>
        <a
          href="#"
          onClick={(e) => {
            scrollToTopMobile();
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
