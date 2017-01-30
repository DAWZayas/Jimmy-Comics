// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import Comic from '../../components/comic';
import {getAllComics} from '../../store/actions';


const mapStateToProps = (state) => ({
  comics: state.comics.comics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchComics: _.once(() => dispatch(getAllComics())),
});


const Home = ({fetchComics, doAnswer, comics}) => {
  fetchComics();
  return(
    <div>
        {comics.map(comic => (
          <Comic key={comic.id} comic={comic} />
        ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
