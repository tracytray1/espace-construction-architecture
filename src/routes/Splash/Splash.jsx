import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import splashDesktop from '../../assets/images/splash/villa-mahroum-desktop.jpg';
import splashMobile from '../../assets/images/splash/villa-mahroum-mobile.jpg';
import './Splash.scss';

const Splash = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [textActive, setTextActive] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // ► Si tablette/mobile → activer l’animation automatiquement
    if (viewportWidth <= 1024) {
      setTimeout(() => setTextActive(true), 200);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [viewportWidth]);

  return (
    <div className="splash">
      <img
        src={viewportWidth < 768 ? splashMobile : splashDesktop}
        alt="Espace Construction Architecture - Entrer"
        className="splash__image"
      />

      <Link to="/home" className="splash__link-center" aria-label="Entrer sur le site">
        <div className="splash__mask--center" />
      </Link>




    </div>
  );
};

export default Splash;
