// npm packages
import React from 'react';
import {Link} from 'react-router';

import NavbarLink from './navbarLink';
import Logout from './logout';
import jimmyLogo from '../../img/icons/jimmycomics.png';

const NavBar = ({actualPath, user}) => (
  <nav className="navbar navbar-toggleable-xs navbar-dark" style={{ backgroundColor:'#ff610f'}}>
    <div className="container">
        <Link to="/" className="navbar-brand">
        <img
          src={jimmyLogo}
          style={{ width:'50%', paddingBottom:"10%", paddingBLeft:"80%"}}
          className="img-responsive"
          alt="Jimmy Comics Logo"
        />
        </Link>
        <Link to="/" className="navbar-brand">Logged as {user.login}{user.provider ? ` (${user.provider})` : null}</Link>
        <li className="nav-item dropdown btn-group navbar-toggler-right">
          <a className="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"> <span className="navbar-toggler-icon"></span></a>
          <div className="dropdown-menu dropdown" aria-labelledby="dropdownMenu1">
              <a className="dropdown-item"><Logout /></a>
          </div>
        </li>
    </div>
</nav>
);

export default NavBar;
