import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {deleteCollection} from '../../store/actions';
import styles from '../../css/collection.css';
import modal from '../../css/modal.css';
import photo from '../../img/collection/photo.png';
import MakeComic from './createComic';
import Create from './create';



const mapStateToProps = (state, {collection}) => ({
  collection,
});

const mapDispatchToProps = dispatch => ({
  onDeleteCollectionClick: collectionId => dispatch(deleteCollection(collectionId))
});

class Collection  extends Component{

constructor(props){
  super(props);
}

render (){
  const {collection, onDeleteCollectionClick} = this.props;
  const id = collection.id;
  console.log (id);

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
          <Link to={`createComic/${collection.id}`}><button type="button" className="btn btn-warning">Add Comic</button></Link>
        </figcaption>
        </div>
      </div>
      </div>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Collection);
