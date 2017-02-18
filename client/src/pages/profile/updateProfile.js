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

const UpdateProfile = ({onUpdateClick, user}) => {
  let nameInput;
  let surnameInput;
  let emailInput;


  const handleClick = (e) => {
    e.preventDefault();

    onUpdateClick({
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      id: user.id,
    });
  };



  return (
    <div className="jumbortron animated fadeIn">
      <form>
        <div className={`${styles.form_group}`}>
          <label htmlFor="inputName">Name:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            ref={(i) => { nameInput = i; }}
          />
        </div>
        <div className={`${styles.form_group}`}>
          <label htmlFor="inputSurname">Surname:</label>
          <input
            type="text"
            className="form-control"
            id="inputSurname"
            ref={(i) => { surnameInput = i; }}
          />
        </div>
        <div className={`${styles.form_group}`}>
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            ref={(i) => { emailInput = i; }}
          />
        </div>
        <button type="submit" className="btn btn-outline-warning waves-effect "
        onClick={handleClick} style={{ backgroundColor:'#fff'}}><strong>Update</strong></button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
