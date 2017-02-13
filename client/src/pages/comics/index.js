// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import Collection from '../../components/collection';
import {getComics} from '../../store/actions';


const mapStateToProps = (state) => ({
  collections: state.collections.collections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: _.once(() => dispatch(getComics())),
});


const Comics = ({fetchCollections, collections}) => {
  fetchCollections();
  return(
    <div>
        {collections.map(collection => (
          <Comic key={collection.comic.id} comic={comic} />
        ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
