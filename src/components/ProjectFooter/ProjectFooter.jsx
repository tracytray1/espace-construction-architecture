import { ChevronUp } from "lucide-react";

import './ProjectFooter.scss'

const ProjectHero = () => {
  return (
    <div className='projet-footer'>
      <p> TOP
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ChevronUp size={22} />
        </a>
      </p>
    </div>
  )
}

export default ProjectHero
