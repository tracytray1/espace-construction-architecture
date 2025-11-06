import { useState, Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import LogoEspaceConstruction from '../../assets/logo-espace-construction.svg?react';
import './Navigation.scss'


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Fragment>
      <div className="navigation" id='wrap'>
        <NavLink className="logo-container" to="/home">
          <LogoEspaceConstruction className="logo" />
        </NavLink>
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
          <NavLink
            to="/home"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Références
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            À Propos
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation
