import ProjectsList from '@/components/ProjectsList/ProjectsList'
import { PROJECTS_DATA } from '@/lib/projects-data'
import './Home.scss'

const Home = () => {

  return (
    <div>
      <ProjectsList projects={PROJECTS_DATA}/>
    </div>
  )
}

export default Home;
