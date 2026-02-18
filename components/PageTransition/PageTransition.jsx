'use client';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  // scroll immédiatement avant le repaint (pour s'assurer d'être en haut)
  useLayoutEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    document.scrollingElement && (document.scrollingElement.scrollTop = 0);

    // restore légèrement plus tard
    const t = setTimeout(() => (html.style.scrollBehavior = prev || ''), 50);
    return () => clearTimeout(t);
  }, []); // s'exécute au montage du composant

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        // Assure-toi encore d'être en haut lorsque l'animation est finie
        const html = document.documentElement;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        html.scrollTop = 0;
        document.body.scrollTop = 0;
        document.scrollingElement && (document.scrollingElement.scrollTop = 0);
        setTimeout(() => (html.style.scrollBehavior = ''), 50);
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
