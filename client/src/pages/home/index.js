// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import photo from '../../img/collection/add.png';
import styles from '../../css/collection.css';
import modal from '../../css/modal.css';
import Create from '../collection/create';


import Collection from '../collection';
import {getAllCollections} from '../../store/actions';


const mapStateToProps = (state) => ({
  collections: state.collections.collections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: _.once(() => dispatch(getAllCollections())),
});


const Home = ({fetchCollections, collections}) => {
  fetchCollections();
  return(
    <div>

    <div className="col-xs-12 col-sm-6 col-lg-4 ">
      <div className={`${styles.photo_grid}`} >
      <div className={`${styles.grid_figure}`} >
      <div className={`${styles.grid_photo_wrap}`}>
        <a href="#modalCreateCollection"><img src={photo} className={`${styles.grid_photo}`} /></a>
        <div className={`${styles.panel_body}`}>
          <p>Add new Collection</p>
        </div>
      </div>
      </div>
      </div>
      <div id="modalCreateCollection" className={modal.overlay}>
       <div className={modal.popup}>
        <h2>Create Collection</h2>
        <a className={modal.close} href="/">&times;</a>
         <div className={modal.content}>
          <Create />
         </div>
       </div>

       </div>
     </div>
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}

      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
