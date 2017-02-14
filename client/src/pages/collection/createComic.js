// npm packages
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createComic} from '../../store/actions';



const mapStateToProps = (state, {collection}) => ({
  collection,
});

const mapDispatchToProps = (dispatch) => ({
  doCreateComic: payload => dispatch(createComic(payload)),
});


class MakeComic extends Component{

  constructor(props){
    super(props);
  }

  render(){
    let nameInput;
    const {collection, doCreateComic} = this.props;


    console.log("*****", collection);

    const handleClick = (e) => {
      e.preventDefault();

      const payload = {
        collectionId: collection.id,
        name: nameInput.value,
      }



      doCreateComic(payload);

      return false;
    };

    return (

    <div>
      <p>Add Comics to {collection.title} </p>
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
}
export default connect(mapStateToProps, mapDispatchToProps)(MakeComic);
