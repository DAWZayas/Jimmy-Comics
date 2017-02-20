import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteComic} from '../../store/actions';
import styles from '../../css/comic.css';
import modal from '../../css/modal.css';

const mapDispatchToProps = dispatch => ({
  onDeleteComicClick: comicId => dispatch(deleteComic(comicId)),
});

class Comic extends Component{

constructor(props){
  super(props);

}

render (){
  const {comic, user, onDeleteComicClick, userId} = this.props;

  const handleCollapseClick = (e) => {
      e.preventDefault();
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
        </figcaption>
      </div>
    );
  }
};


export default connect(null, mapDispatchToProps)(Comic);
