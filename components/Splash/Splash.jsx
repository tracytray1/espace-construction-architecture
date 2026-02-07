'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './Splash.scss';

const Splash = () => {
  const [viewportWidth, setViewportWidth] = useState(null); // ← null au lieu de window.innerWidth
  const [isMounted, setIsMounted] = useState(false); // ← Nouveau état

  useEffect(() => {
    // S'exécute uniquement côté client
    setIsMounted(true);
    setViewportWidth(window.innerWidth);

    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Attendre que le composant soit monté côté client
  if (!isMounted || viewportWidth === null) {
    return (
      <div className="splash">
        {/* Image par défaut pendant le chargement */}
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }} />
      </div>
    );
  }

  return (
    <div className="splash">
      <img
        src={viewportWidth < 768 ? "/images/splash/villa-mahroum-mobile.jpg" : "/images/splash/villa-mahroum-desktop.png"}
        alt="Espace Construction Architecture - Entrer"
        className="splash__image"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        quality={90}
      />

      <Link
        href="/home"
        className="splash__link-center"
        aria-label="Entrer sur le site"
      >
        <div className="splash__mask--center" />
      </Link>
    </div>
  );
};

export default Splash;
