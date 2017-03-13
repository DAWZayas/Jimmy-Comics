import React from 'react';
import {connect} from 'react-redux';
import {searchComics} from '../../store/actions';
import {getMoreComics} from '../../store/actions';
import {getAllComics} from '../../store/actions';

const mapStateToProps = state => ({
  filtered: state.comics.filetered,
});

const mapDispatchToProps = dispatch => ({
  filterComics: payload => dispatch(searchComics(payload)),
  });

const searchBar = ({filtered, filterComics}) => {

  const handleChange = (e) => filterComics({
      skip: 0,
      limit: 10,
      match: e.target.value,
      reset: true,
    });

  return (
      <form className="navbar-form" style={{ backgroundColor:'#ff610f', width:"50%", textAlign:"center", color:"#fff", marginLeft:"25%"}}>
          Search Comic: <input type="text" id="searchInput" className="form-control" defaultValue={filtered} onChange={handleChange} style={{ width:"50%", marginLeft:"25%"}} />
      </form>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
