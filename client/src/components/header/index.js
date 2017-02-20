// npm packages
import React from 'react';
import {Link} from 'react-router';

import NavBar from '../navbar';
import jimmyLogo from '../../img/icons/jimmycomics.png';
import styles from '../../css/typography.css';
import SearchBar from '../../components/searchBar';

export default (props) => (
  <header>
    <Link to="/">
      <img
        src={jimmyLogo}
        className="img-responsive"
        alt="Jimmy Comics Logo"
        style={{ width: "40%", marginLeft:'30%', backgroundColor:'#ff610f'}}
      />

      <h1>Comicgram</h1>
    </Link>
      <NavBar {...props}/>
      <SearchBar />
  </header>
);
