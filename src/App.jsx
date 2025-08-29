import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Home from './routes/Home/Home'
import Contact from './routes/Contact/Contact'
import Navigation from './routes/Navigation/Navigation'
import Projet from './routes/Projet/Projet'
import PageTransition from './components/PageTransition/PageTransition';


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="projets/:id" element={<PageTransition><Projet /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
