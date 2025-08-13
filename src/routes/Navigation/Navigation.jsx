import { useState, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoEspaceConstruction from '../../assets/logo-espace-construction.svg?react';
import './Navigation.scss'


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <LogoEspaceConstruction className="logo" />
        </Link>
        {/* Bouton hamburger (visible seulement sur mobile) */}
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Liens navigation */}
        <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>
            References
          </Link>
          <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation
