// npm packages
import React from 'react';
import MediaQuery from 'react-responsive';
import SearchBar from '../../components/searchBar';

import {ComicList, ComicSingle, CompleteComicList} from '../../components/comicList';

const Home = ({comics}) => {
  return(
    <div>
    <SearchBar />
      <MediaQuery query="(min-width: 992px)">
       {(matches) => {
         if (matches) {
           return <ComicList />;
         }else{
            return <ComicSingle />;
         }
       }}
      </MediaQuery>
    </div>

  );
};

export default Home;
