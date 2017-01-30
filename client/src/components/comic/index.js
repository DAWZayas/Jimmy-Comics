import React from 'react';
import {connect} from 'react-redux';
import {deleteComic} from '../../store/actions';
import styles from './comic.css'
import photo from '../../img/comic/photo.png';
import githubLogo from '../../img/icons/github.png';

const mapDispatchToProps = dispatch => ({
  onDeleteComicClick: comicId => dispatch(deleteComic(comicId))
});

const Comic = ({comic, onDeleteComicClick}) => {

  const handleClick = (e) => {
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
      <div className={`${styles.photo_grid}`} >
      <div className={`${styles.grid_figure}`} >
      <div className={`${styles.grid_photo_wrap}`}>
        <img src={photo} className={`${styles.grid_photo}`} />
        <div className={`${styles.panel_body}`}>
          <p>Comic: {comic.name}</p>
        </div>
      </div>
      <figcaption>
        <button type="button" className="btn btn-warning"  onClick={() => onDeleteComicClick(comic.id)} >Delete</button>
      </figcaption>
      </div>
      </div>
    </div>
  );
};


export default connect(null, mapDispatchToProps)(Comic);
