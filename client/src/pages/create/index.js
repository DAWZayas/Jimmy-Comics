// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createComic} from '../../store/actions';
import {createQuestion} from '../../store/actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  doCreateComic: payload => dispatch(createComic(payload)),
});

const Create = ({doCreateComic}) => {
  let comicName;
  let comicPrice;

  const handleCreate = (e) => {
    e.preventDefault();

    const name = comicName.value;
    const price = comicPrice.value;
    doCreateComic({name, price});

    return false;
  };

  return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="comicName">Comic Name</label>
            <input
              type="text"
              className="form-control"
              id="comicName"
              placeholder="Comic name"
              ref={(t) => { comicName = t; }}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="comicPrice"
              placeholder="Comic Price"
              ref={(d) => { comicPrice = d; }}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={handleCreate}>
            Create new comic
          </button>
        </form>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
