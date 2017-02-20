import React from 'react';
import InfiniteScroll from 'redux-infinite-scroll';
import {connect} from 'react-redux';
import _ from 'lodash';

import styles from '../../css/comic.css';
import Comic from './comic';
import {getMoreComics} from '../../store/actions';
import {Spinner} from '../../components/spinner';


const mapStateToProps = (state) => ({
  comics: state.comics.comics,
  hasMore: state.comics.hasMore,
  loadingMore: state.comics.status === 'loading',
});

const mapDispatchToProps = (dispatch) => ({
  loadMore: payload => dispatch(getMoreComics(payload)),
});


const ComicList = ({comics, loadMore, hasMore, loadingMore}) => {

  const onLoadMore = () => loadMore({
   skip: comics.length,
   limit: 6,
});

  return(
      <div className="col-xs-9" style={{marginLeft:"13%"}}>
          {!hasMore && comics.length === 0 ?
            <div>No comics yet!</div> :
            <InfiniteScroll
              elementIsScrollable={false}
              loadMore={onLoadMore}
              hasMore={hasMore}
              loadingMore={loadingMore}
              loader={<Spinner />}
              >

                {comics.map((comic, index) => (
                  <Comic key={index} comic={comic} />
                ))}


            </InfiniteScroll>
          }

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicList);
