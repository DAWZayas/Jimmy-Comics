// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import photo from '../../img/comic/add.png';
import styles from '../../css/comic.css';
import modal from '../../css/modal.css';
import Create from '../comic/create';


import Comic from '../comic';
import {getAllComics} from '../../store/actions';


const mapStateToProps = (state) => ({
  comics: state.comics.comics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchComics: _.once(() => dispatch(getAllComics())),
});


const Home = ({fetchComics, comics}) => {
  fetchComics();
  return(
    <div className="col-xs-12">
      <div className={`${styles.photo_grid}`} >
        {comics.map(comic => (
          <Comic key={comic.id} comic={comic} />
        ))}
      </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
