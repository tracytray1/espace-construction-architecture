import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoEspaceConstruction from '../../assets/logo-espace-construction.svg?react';
import './Navigation.scss'


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <LogoEspaceConstruction className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>
            References
          </Link>
          <Link className="nav-link" to='/contact'>
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
