import React, {Component} from 'react';
import {connect} from 'react-redux';

import modal from '../../css/modal.css';

import Create from './create';
import Comic from './comic';
import {Spinner} from '../../components/spinner';
import {getMoreComics} from '../../store/actions';

const mapStateToProps = (state, {user}) => ({
  user: state.auth.user,
  hasMore: state.comics.hasMore,
  loadingMore: state.comics.status === 'loading',
  comics: state.comics.comics,
});

const mapDispatchToProps = dispatch => ({
  loadMore: payload => dispatch(getMoreComics(payload)),
});

class ComicSingle extends Component {

  constructor(props){
    super(props);
    this.state = {
         comicIndex: 0,
       };

  }

  componentDidMount() {
      const {comics, loadMore} = this.props;
      loadMore({
        skip: comics.length,
        limit: 0,
      });
  }

  render (){
    const {comics, user, hasMore, loadMore, loadingMore, onDeleteComicClick, userId} = this.props;
    const {comicIndex} = this.state;

    const comic = comics[comicIndex];


    const handleClick = (inc) => {
      if (hasMore && comicIndex + inc >= comics.length) {
         loadMore({
           skip: comics.length,
           limit: 0,
         });
       }
       this.setState({
        comicIndex: comicIndex + inc,
       });

       return false;
    };

      return (
        <div>
        {!hasMore && comics.length === 0 ? <div style={{ textAlign:'center'}}>No comics to Show!</div> : null}
         {loadingMore ? <Spinner /> : comic ? <Comic key={comic.id} comic={comic} /> : comics.length > 0 ? <img style={{width:"100%"}} src="http://static4.comicvine.com/uploads/screen_kubrick/0/40/1290250-nomoremutantscp.jpg" /> : null}
          <button type="button" className="btn" style={{ backgroundColor:'#ff610f'}} disabled={comicIndex === 0} onClick={() => handleClick(-1)}>
            <span className="glyphicon glyphicon-arrow-left" />
          </button>
          <button type="button" className="btn" style={{ backgroundColor:'#ff610f'}} disabled={loadingMore || (!hasMore && comicIndex >= comics.length)} onClick={() => handleClick(+1)}>
            <span className="glyphicon glyphicon-arrow-right" />
          </button>
          <a className="nav-link pull-right" href="#modalCreateComic" style={{ color:'#ff610f'}}> <span className="fa fa-plus-circle fa-4x" /></a>
          <div id="modalCreateComic" className={modal.overlay}>
           <div className={modal.popup}>
            <h2>Create Collection</h2>
            <a className={modal.close} href="/">&times;</a>
             <div className={modal.content}>
              <Create />
             </div>
           </div>
          </div>
         </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ComicSingle);
