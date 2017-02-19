import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {deleteComic} from '../../store/actions';
import styles from '../../css/comic.css';
import modal from '../../css/modal.css';
import photo from '../../img/comic/photo.png';


const mapStateToProps = (state, {comic, user}) => ({
  comic,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onDeleteComicClick: comicId => dispatch(deleteComic(comicId)),
});

class Comic  extends Component{

constructor(props){
  super(props);
  this.state = {
       collapse: true,
     };

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
            <p>Comic: {comic.title}</p>
            <p>Caption: {comic.caption}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Comic);
