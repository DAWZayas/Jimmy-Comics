// npm packages
import React from 'react';
import {Link} from 'react-router';

import NavbarLink from './navbarLink';
import Logout from './logout';
import jimmyLogo from '../../img/icons/jimmycomics.png';
import Profile from '../../pages/profile';

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
        <li className="nav-item dropdown btn-group navbar-toggler-right">
          <a className="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"> <span className="navbar-toggler-icon"></span></a>
          <div className="dropdown-menu dropdown" aria-labelledby="dropdownMenu1">
              <a className="dropdown-item"><Logout /></a>
              <Link to="/profile" className="dropdown-item"><button className="navbar-btn btn" style={{ backgroundColor:'#ff610f'}}>Profile</button></Link>
          </div>
        </li>
    </div>
</nav>
);

export default NavBar;
