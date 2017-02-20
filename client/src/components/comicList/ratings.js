import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getRatings, addObservable, removeObservable} from '../../store/actions';
import {registerComicObservable} from '../../store/realtime';
import {Spinner} from '../../components/spinner';

const mapStateToProps = (state, {comic}) => ({
  answering: state.comics.answering &&
             state.comics.answering[comic.id],
});

const mapDispatchToProps = dispatch => ({
  getRatings: comicId => dispatch(getRatings(comicId)),
  addObservable: observable => dispatch(addObservable(observable)),
  removeObservable: (observable, comic) => dispatch(removeObservable({observable, comic})),
});

class Ratings extends Component {

  constructor(props) {
    super(props);
    const {comic, getRatings, addObservable, loading} = this.props;
    getRatings(comic.id);
    const {payload: observable} = addObservable(registerComicObservable(comic.id));
    this.state = {
      loading,
      observable,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.comic !== nextProps.comic && nextProps.comic.ratings) {
      this.setState({loading: false});
    }
  }

  componentWillUnmount() {
    const {removeObservable, comic} = this.props;
    const {observable} = this.state;
    removeObservable(observable, comic);
  }


  render() {
    const {comic, answering} = this.props;
    const {loading} = this.state;

    return (
      <div className="panel-body">
        {loading ? <Spinner /> : (
          <div>
            <h2>Main Ratings</h2>
            <ul className="list-group">
              {comic.ratings.map((rating, i) => (
                <li className="list-group-item" key={i}>{rating.rating}</li>
              ))}
              {answering ? <li className="list-group-item" key={comic.ratings.length}><Spinner /></li> : null}
            </ul>
            {!answering && comic.ratings.length === 0 ? 'No ratings yet!' : null}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
