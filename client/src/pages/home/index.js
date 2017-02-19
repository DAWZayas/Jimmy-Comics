// npm packages
import React from 'react';
import {connect} from 'react-redux';

import ComicList from '../../components/comicList';


const mapStateToProps = (state) => ({
  comics: state.comics.comics,
});

const Home = ({fetchComics, comics}) => {
  return(
    <div className="col-xs-12">
      <ComicList />
    </div>

  );
};

export default connect(mapStateToProps, null)(Home);
