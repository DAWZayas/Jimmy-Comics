// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {createComic} from '../../store/actions';
import styles from '../../css/profile.css';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  doCreateComic: payload => dispatch(createComic(payload)),
});

const Create = ({doCreateComic}) => {
  let titleInput;
  let captionInput;
  let image;

  const handleCreate = (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const caption = captionInput.value;
    doCreateComic({title, caption, image: encodeURIComponent(image)});

    return false;
  };

  const handdleFileChange = (ev) =>{
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (e) => {
      image = e.target.result;
    } ;
    reader.readAsDataURL(file);
  };

  return (
    <div className="jumbortron animated fadeIn">
      <form>
        <div className={`${styles.form_group}`}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="comicTitle"
            ref={(i) => { titleInput = i; }}
          />
        </div>
        <div className={`${styles.form_group}`}>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            className="form-control"
            id="caption"
            ref={(i) => { captionInput = i; }}
          />
        </div>
        <div className={`${styles.form_group}`}>
          <label htmlFor="image">Image</label>
          <input
            onChange={handdleFileChange}
            type="file"
            accept = "image/jpg"
            />
        </div>
          <button type="submit" className="btn btn-outline-warning waves-effect "
          onClick={handleCreate} style={{ backgroundColor:'#fff'}}><strong>Create</strong></button>

      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
