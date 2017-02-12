import React from 'react';
import {connect} from 'react-redux';
import {deleteCollection} from '../../store/actions';
import styles from './collection.css'
import photo from '../../img/comic/photo.png';


const mapDispatchToProps = dispatch => ({
  onDeleteCollectionClick: collectionId => dispatch(deleteCollection(collectionId))
});

const Collection = ({collection, onDeleteCollectionClick}) => {

  const handleClick = (e) => {
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
      <div className={`${styles.photo_grid}`} >
      <div className={`${styles.grid_figure}`} >
      <div className={`${styles.grid_photo_wrap}`}>
        <img src={photo} className={`${styles.grid_photo}`} />
        <div className={`${styles.panel_body}`}>
          <p>Collection: {collection.title}</p>
        </div>
      </div>
      <figcaption>
        <button type="button" className="btn btn-warning"  onClick={() => onDeleteCollectionClick(collection.id)}>Delete</button>
      </figcaption>
      </div>
      </div>
    </div>
  );
};


export default connect(null, mapDispatchToProps)(Collection);
