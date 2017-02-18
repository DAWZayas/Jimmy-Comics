// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import NavbarLink from './navbarLink';
import Logout from './logout';
import Profile from '../../pages/profile';
import styles from '../../css/navbar.css';
import modal from '../../css/modal.css';
import Create from '../../pages/comic/create';
import SearchBar from '../../components/searchBar';

const mapStateToProps = (state) => ({
  authenticated: state.auth.token ? true : false,
  user: state.auth.user,
});

const yesAuth = (user) => (
      <div className="container">
        <Link to="/profile" className="navbar-brand pull-left">
          <img
            key={Math.random() + 'avatar'}
            src={ user.image ||
              "https://pbs.twimg.com/profile_images/764592533636808704/YGrGoK0_.jpg"}
            className={`${styles.avatar}`}
           />
          </Link>
          <SearchBar />
          <a className="nav-link dropdown-toggler-right pull-right" data-toggle="dropdown" aria-haspopup="true"> <span className="fa fa-bars fa-3x" /></a>
          <div className="dropdown-menu dropdown pull-right" aria-labelledby="dropdownMenu1">
              <a className="dropdown-item"><Logout /></a>
              <Link to="/profile" className="dropdown-item"><button className="navbar-btn btn" style={{ backgroundColor:'#ff610f'}}>Profile</button></Link>
          </div>


  </div>

);

const noAuth = () => (
  <div className="container">
      <li className="nav-item dropdown btn-group navbar-toggler-right">
        <a className="nav-link dropdown-toggler-right pull-right" data-toggle="dropdown" aria-haspopup="true"> <span className="fa fa-bars fa-3x" /></a>
        <div className="dropdown-menu dropdown pull-right" aria-labelledby="dropdownMenu1">
            <Link to="/login" className="dropdown-item" style={{ width: '50%'}}><button className="navbar-btn btn" style={{ backgroundColor:'#ff610f'}}>Login</button></Link>
            <Link to="/register" className="dropdown-item" style={{ width: '50%'}}><button className="navbar-btn btn" style={{ backgroundColor:'#ff610f'}}>Register</button></Link>
        </div>
      </li>
  </div>
);

const Navbar = ({actualPath, authenticated, user}) => (
  <nav className="navbar navbar-dark" style={{ backgroundColor:'#ff610f'}}>
    <div className="container" >
      {authenticated ? yesAuth(user) : noAuth()}
    </div>

  </nav>


);

export default connect(mapStateToProps, null)(Navbar);
