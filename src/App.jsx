import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Home from './routes/Home/Home'
import Splash from './routes/Splash/Splash'
import Contact from './routes/Contact/Contact'
import Navigation from './routes/Navigation/Navigation'
import Projet from './routes/Projet/Projet'
import AboutPage from './routes/AboutPage/AboutPage'
import PageTransition from './components/PageTransition/PageTransition';


function App() {
  const location = useLocation();

  return (

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Splash screen as homepage (no navigation) */}
          <Route index element={<PageTransition><Splash /></PageTransition>} />

          {/* All site routes wrapped with Navigation */}
          <Route element={<Navigation />}>
            <Route path="home" element={<PageTransition><Home /></PageTransition>} />
            <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="projets/:id" element={<PageTransition><Projet /></PageTransition>} />
            <Route path="a-propos" element={<PageTransition><AboutPage /></PageTransition>} />
          </Route>
        </Routes>
      </AnimatePresence>

  )
}

export default App
