// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import styles from '../../css/profile.css';


// our packages

import {updateProfile} from '../../store/actions';

const mapStateToProps = state => ({
  redirectToProfile: state.auth.redirectToProfile,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onUpdateClick: params => dispatch(updateProfile(params)),
});

const UpdateAvatar = ({onUpdateClick, user, onClick}) => {
  let image;

  const handleClick = (e) => {
    e.preventDefault();

    onUpdateClick({
      id: user.id,
      image: encodeURIComponent(image),
    });
  };

  const handdleFileChange = (ev) =>{
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (e) => {
      image = e.target.result;
    } ;
    reader.readAsDataURL(file);
  }

  return (
    <div className="jumbortron animated fadeIn">
      <form>
        <div className={`${styles.form_group}`}>
          <input
            onChange={handdleFileChange}
            type="file"
            accept = "image/jpg"
            />
          <button type="submit" className="btn btn-outline-warning waves-effect "
          onClick={handleClick} style={{ backgroundColor:'#fff'}}><strong>Update</strong></button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAvatar);
