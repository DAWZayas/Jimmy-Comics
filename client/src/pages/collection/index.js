import React from 'react';
import {connect} from 'react-redux';
import {deleteCollection} from '../../store/actions';
import styles from '../../css/collection.css';
import modal from '../../css/modal.css';
import photo from '../../img/collection/photo.png';
import MakeComic from './createComic';
import Create from './create';




const mapDispatchToProps = dispatch => ({
  onDeleteCollectionClick: collectionId => dispatch(deleteCollection(collectionId))
});

const Collection = ({collection, onDeleteCollectionClick}) => {

  const handleClick = (e) => {
  };

  return (
    <div className="col-xs-12 col-sm-6 col-lg-4 ">
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
        <a href="#modalCreateComic"><button type="button" className="btn btn-warning">Add Comic</button></a>
      </figcaption>
      </div>
      <div id="modalCreateComic" className={modal.overlay}>
       <div className={modal.popup}>
        <a className={modal.close} href="/">&times;</a>
         <div className={modal.content}>
          <MakeComic />
         </div>
       </div>
       </div>
       </div>
    </div>

  );
};


export default connect(null, mapDispatchToProps)(Collection);
