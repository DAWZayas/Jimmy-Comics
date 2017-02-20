// npm packages
import React from 'react';
import MediaQuery from 'react-responsive';

import {ComicList, ComicSingle, CompleteComicList} from '../../components/comicList';

const Home = ({comics}) => {
  return(
    <div>
      <MediaQuery query="(min-width: 992px)">
       {(matches) => {
         if (matches) {
           return <CompleteComicList />;
         }else{
            return <ComicSingle />;
         }
       }}
      </MediaQuery>
    </div>

  );
};

export default Home;
