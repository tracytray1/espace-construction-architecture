import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}    // départ : invisible et légèrement en bas
      animate={{ opacity: 1, y: 0 }}     // arrivée : visible et à sa position
      exit={{ opacity: 0, y: -20 }}      // sortie : disparaît vers le haut
      transition={{ duration: 0.7, ease: 'easeInOut' }}  // durée et easing
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
