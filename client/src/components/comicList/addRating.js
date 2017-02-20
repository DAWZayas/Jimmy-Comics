import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ratingComic} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  doRating: payload => dispatch(ratingComic(payload)),
});

class AddRating extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let ratingInput;
    const {comic, doRating} = this.props;

    const handleRatingClick = (e) => {
      e.preventDefault();
      doRating({comic, rating: ratingInput.value});
      ratingInput.value = '';
      return false;
    };

    return (
        <form className="form-horizontal">
          <div className="input-group" style={{ marginLeft:"25%", width:"30%"}}>
            <input
              type="number"
              className="form-control"
              id="ratingInput"
              ref={(i) => { ratingInput = i; }}

            />
              <button type="submit" className="btn" style={{ backgroundColor:'#ff610f'}} onClick={handleRatingClick}>
                Rating
              </button>
          </div>
        </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddRating);
