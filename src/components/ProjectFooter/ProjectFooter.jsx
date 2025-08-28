import { ChevronUp } from "lucide-react";

import './ProjectFooter.scss'

const ProjectHero = () => {
  return (
    <div className='projet-footer'>
      <p>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>TOP</a>
        <ChevronUp size={22} />
      </p>
    </div>
  )
}

export default ProjectHero
