import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteComic} from '../../store/actions';
import styles from '../../css/comic.css';
import modal from '../../css/modal.css';

import Ratings from './ratings.js';
import AddRating from './addRating.js';

const mapDispatchToProps = dispatch => ({
  onDeleteComicClick: comicId => dispatch(deleteComic(comicId)),
});

class Comic extends Component{

constructor(props){
  super(props);
  this.state = {
     collapse: true,
   };
}

render (){
  const {comic, user, onDeleteComicClick, userId} = this.props;
   const {collapse} = this.state;

  const handleCollapseClick = (e) => {
      e.preventDefault();
      this.setState({
        collapse: !this.state.collapse,
      });
      return false;
    };

    return (
      <div className={`${styles.grid_figure}`} >
        <div className={`${styles.grid_photo_wrap}`}>
          <img src={comic.url} className={`${styles.grid_photo}`} />
          <div className={`${styles.panel_body}`}>
            <p style={{ color:'#ff610f'}}><strong>{comic.title}</strong></p>
          </div>
        </div>
        <figcaption>
          {userId === comic.owner ? (
          <button type="button" className="btn btn-warning"  onClick={() => onDeleteComicClick(comic.id)}>Delete</button>
          ) : null}
          <span className={`glyphicon glyphicon-${collapse ? 'plus' : 'minus'}`}
            style={{cursor: 'pointer'}}
            onClick={handleCollapseClick} />{' '}
          {collapse ? null : <Ratings comic={comic} loading />}
          {collapse ? null : <AddRating comic={comic} />}
        </figcaption>
      </div>
    );
  }
};


export default connect(null, mapDispatchToProps)(Comic);
