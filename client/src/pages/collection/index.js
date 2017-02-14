import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {deleteCollection, getCollectionInfo} from '../../store/actions';
import styles from '../../css/collection.css';
import modal from '../../css/modal.css';
import photo from '../../img/collection/photo.png';
import MakeComic from './createComic';
import Create from './create';



const mapStateToProps = (state, {collection}) => ({
  collection,
});

const mapDispatchToProps = dispatch => ({
  onDeleteCollectionClick: collectionId => dispatch(deleteCollection(collectionId)),
  onSaveCollectionInfoClick: payload => dispatch(getCollectionInfo(payload)),
});

class Collection  extends Component{

constructor(props){
  super(props);
  this.state = {
       collapse: true,
     };

}

render (){
  const {collection, onDeleteCollectionClick, onSaveCollectionInfoClick} = this.props;
  const {collapse} = this.state;

  const handleCollapseClick = (e) => {
      e.preventDefault();
      this.setState({
        collapse: !this.state.collapse,
      });
      return false;
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
          <button type="button" className="btn btn-warning" onClick={handleCollapseClick}>Add Comic</button>
          {collapse ? null : <MakeComic collection = {collection}/>}
        </figcaption>
        </div>
      </div>
      </div>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Collection);
