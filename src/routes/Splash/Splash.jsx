import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import splashImage from '../../assets/images/homepage/villa-mahroum-andelu.jpg';
import './Splash.scss';

const Splash = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tailles adaptatives pour le SVG
  const getTextSizes = () => {
    if (viewportWidth <= 480) {
      return {
        ecaSize: 90,
        subtitleSize: 12,
        ecaX: '50%',
        ecaY: '40%',
        subtitleX: '50%',
        subtitleY: '75%',
        stacked: true
      };
    } else if (viewportWidth <= 768) {
      return {
        ecaSize: 110,
        subtitleSize: 14,
        ecaX: '50%',
        ecaY: '40%',
        subtitleX: '50%',
        subtitleY: '75%',
        stacked: true
      };
    } else if (viewportWidth <= 1024) {
      return {
        ecaSize: 130,
        subtitleSize: 16,
        ecaX: '50%',
        ecaY: '40%',
        subtitleX: '50%',
        subtitleY: '73%',
        stacked: true
      };
    }
    return {
      ecaSize: 80,
      subtitleSize: 8,
      ecaX: '40%',
      ecaY: '60%',
      subtitleX: '73%',
      subtitleY: '92%',
      stacked: false
    };
  };

  const { ecaSize, subtitleSize, ecaX, ecaY, subtitleX, subtitleY, stacked } = getTextSizes();

  return (
    <div className="splash">
      <img
        src={splashImage}
        alt="Espace Construction Architecture - Entrer"
        className="splash__image"
      />

      {/* Masques périphériques */}
      <div className="splash__mask splash__mask--top-left" />
      <div className="splash__mask splash__mask--top-right" />
      <div className="splash__mask splash__mask--bottom-left" />
      <div className="splash__mask splash__mask--bottom-right" />
      <div className="splash__mask splash__mask--right" />
      <div className="splash__mask splash__mask--left" />

      {/* Masque central + texte gris translucide */}
      <div className="splash__mask splash__mask--center">
        <Link to="/home" className="splash__link-center" aria-label="Entrer sur le site">
          <svg
            className="splash__mask-svg"
            viewBox="0 0 500 60"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <mask id="text-mask" maskUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x={ecaX}
                  y={ecaY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight="900"
                  fontSize={ecaSize}
                  fill="black"
                >
                  ECA
                </text>
                <text
                  x={subtitleX}
                  y={subtitleY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight="600"
                  fontSize={subtitleSize}
                  fill="black"
                >
                  Espace Construction Architecture
                </text>
              </mask>
            </defs>

            {/* Bandeau blanc percé */}
            <rect width="100%" height="100%" fill="white" mask="url(#text-mask)" />

            {/* Texte gris semi-transparent au-dessus */}
            <text
              x={ecaX}
              y={ecaY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Montserrat, Arial, sans-serif"
              fontWeight="900"
              fontSize={ecaSize}
              fill="rgba(74, 74, 74, 0.64)"
              style={{ mixBlendMode: 'overlay' }}
            >
              ECA
            </text>
            <text
              x={subtitleX}
              y={subtitleY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Montserrat, Arial, sans-serif"
              fontWeight="600"
              fontSize={subtitleSize}
              fill="rgba(74, 74, 74, 0.64)"
              style={{ mixBlendMode: 'overlay' }}
            >
              Espace Construction Architecture
            </text>
          </svg>
        </Link>
      </div>

      <div className="splash__text">
        <p>Utiliser le climat comme ressource</p>
        <p>Concevoir avec exigence et écoute</p>
        <p>Maîtriser les contraintes constructives</p>
      </div>
    </div>
  );
};

export default Splash;
