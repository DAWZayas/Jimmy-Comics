// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import Collection from '../../components/collection';
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
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
