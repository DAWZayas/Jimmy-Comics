import React from 'react';
import {connect} from 'react-redux';
import {searchComics} from '../../store/actions';
import {getAllComics} from '../../store/actions';



const mapStateToProps = state => ({
  isSearch: state.comics.search,
});

const mapDispatchToProps = dispatch => ({
  onSearchClick: text => dispatch(searchComics(text)),
  onBackSearchClick: () => dispatch(getAllComics()),
  });

const searchBar = ({onSearchClick, isSearch, onBackSearchClick, i}) => {

  let searchInput;

  const handleChange = (e) => {
   e.preventDefault();
   if (searchInput.value !== '') {
     onSearchClick(searchInput.value);
   }
   return false;
 };


    const handleBackSearch = (e) => {
      e.preventDefault();
      onBackSearchClick();
      return false;
    };

    const handleClickFilter = (e) => {
      e.preventDefault();
      return false;
    };

  return (
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" id="searchInput" className="form-control" placeholder="Search..." onChange={handleChange} ref={(i) => { searchInput = i; }} />
          {isSearch && <button className="btn navbar-btn" type="button" style={{ backgroundColor:'#ff610f', width:"35%"}} onClick={ handleBackSearch}>Revert</button>}
        </div>
      </form>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
