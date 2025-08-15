import ProjectsList from '../../components/ProjectsList/ProjectsList'
import { projects } from '../../projects-data'
import './Home.scss'

const Home = () => {

  return (
    <div>
      <ProjectsList projects={projects}/>
    </div>
  )
}

export default Home
