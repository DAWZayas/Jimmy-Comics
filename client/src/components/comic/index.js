import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styles from './comic.css'
import photo from '../../img/collection/photo.png';

const Comic = ({comic}) => {

  const handleClick = (e) => {
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
      <div className={`${styles.photo_grid}`} >
      <div className={`${styles.grid_figure}`} >
      <div className={`${styles.grid_photo_wrap}`}>
          <Link to={`/view/${comic.name}`}>
            <img src={photo} className={`${styles.grid_photo}`} />
          </Link>
        <div className={`${styles.panel_body}`}>
          <p>Collection: {comic.name}</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};


export default connect(null, null)(Comic);
