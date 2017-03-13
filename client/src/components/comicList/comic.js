import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteComic, likeComicAction} from '../../store/actions';
import styles from '../../css/comic.css';
import modal from '../../css/modal.css';

const mapStateToProps = state => ({
  userId: state.auth.user.id,
});

const mapDispatchToProps = dispatch => ({
  onDeleteComicClick: comicId => dispatch(deleteComic(comicId)),
  likeComic: payload => dispatch(likeComicAction(payload)),
});

class Comic extends Component{

constructor(props){
  super(props);
  this.state = {
   };
}

render (){
  const {comic, onDeleteComicClick, likeComic} = this.props;

  const handleLike = e => {
      e.preventDefault();
      likeComic({id: comic.id})
      return false;
    }

    return (
      <div className={`${styles.grid_figure}`} >
        <div className={`${styles.grid_photo_wrap}`}>
          <img src={comic.url} className={`${styles.grid_photo}`} />
          <div className={`${styles.panel_body}`}>
            <p style={{ color:'#ff610f', fontSize:"4.0em"}}><strong>{comic.title}</strong></p>
          </div>
        </div>
        <figcaption>
          <button type="button" className={`btn btn-xs btn-warning ${this.props.userId !== comic.owner ? 'hidden' : ''}`}  onClick={() => onDeleteComicClick(comic.id)}>Delete</button>
          {
          this.props.userId !== comic.owner ?
            <button
              className="btn btn-xs btn-warning "
              style={{marginLeft:"45%"}}
              onClick={(e) => handleLike(e, comic.id)}>
              <span className="glyphicon glyphicon-thumbs-up" />
              <span
                style={{marginLeft:"10px"}}>
               {comic.likes}
              </span>
            </button>
            :
            <button
              className="btn btn-xs btn-warning "
              style={{marginLeft:"70%"}}>
              <span className="glyphicon glyphicon-thumbs-up" />
              <span
                style={{marginLeft:"10px"}}>
               {comic.likes}
              </span>
            </button>
          }
        </figcaption>
      </div>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Comic);
