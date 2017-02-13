// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createComic} from '../../store/actions';
import Collection from '../../components/collection';


const mapStateToProps = (state) => ({
  collection: state.collections.collections,
});

const mapDispatchToProps = (dispatch) => ({
  doCreateComic: collectionId => dispatch(createComic(collectionId)),
});

const MakeComic = ({doCreateComic, collection}) => {
  let nameInput;

  const handleClick = (e) => {
    e.preventDefault();

    const name = nameInput.value;
    doCreateComic({ collection:collection.id, name: nameInput.value});

    return false;
  };

  return (
  <div>
    <h2>Add Comics to {collection.title}</h2>
    <form className="form-horizontal">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Enter your comic..."
          ref={(i) => { nameInput = i; }}
        />
      </div>
      <button type="submit" className="btn btn-default" onClick={handleClick}>
        Add
      </button>
    </form>
  </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeComic);
