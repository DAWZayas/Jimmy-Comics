// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {createCollection} from '../../store/actions';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  doCreateCollection: payload => dispatch(createCollection(payload)),
});

const Create = ({doCreateCollection}) => {
  let collectionTitle;

  const handleCreate = (e) => {
    e.preventDefault();

    const title = collectionTitle.value;
    doCreateCollection({title});

    return false;
  };

  return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="collectionTitle">Collection Title</label>
            <input
              type="text"
              className="form-control"
              id="collectionTitle"
              placeholder="Collection title"
              ref={(t) => { collectionTitle = t; }}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={handleCreate}>
            Create new collection
          </button>
        </form>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
