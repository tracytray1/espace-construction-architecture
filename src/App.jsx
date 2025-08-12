import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home/Home'
import Contact from './routes/Contact/Contact'
import Navigation from './routes/Navigation/Navigation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home/>} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
