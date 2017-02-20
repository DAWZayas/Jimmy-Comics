import React from 'react';
import {connect} from 'react-redux';
import {searchComics} from '../../store/actions';
import {getMoreComics} from '../../store/actions';
import {getAllComics} from '../../store/actions';

const mapStateToProps = state => ({
  isSearch: state.comics.search,
  comics: state.comics.comics,
});

const mapDispatchToProps = dispatch => ({
  onSearchClick: text => dispatch(searchComics(text)),
  onBackSearchClick: (payload) => dispatch(getMoreComics(payload)),
  onFullBackSearchClick: (payload) => dispatch(getAllComics(payload)),
  });

const searchBar = ({onSearchClick, comics, isSearch, onBackSearchClick, onFullBackSearchClick}) => {

  let searchInput;

  const handleFullBackSearch = (e) => {
    e.preventDefault();
    onFullBackSearchClick();
    return false;
  };

  const handleChange = (e) => {
   e.preventDefault();
   if (searchInput.value !== '') {
     onSearchClick(searchInput.value);
   }
   return false;
 };

 const handleBackSearch = () => onBackSearchClick({
  skip: comics.length,
  limit: 6,
});

  return (
      <form className="navbar-form" style={{ backgroundColor:'#ff610f', width:"50%", textAlign:"center", color:"#fff", marginLeft:"25%"}}>
          Search Comic: <input type="text" className="form-control" onChange={handleChange} ref={(i) => { searchInput = i; }} style={{ width:"50%", marginLeft:"25%"}} />
          {isSearch && <button className="btn navbar-btn" type="button" style={{ backgroundColor:'#ff610f'}} onClick={ handleBackSearch,handleFullBackSearch}>Show All</button>}
      </form>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
