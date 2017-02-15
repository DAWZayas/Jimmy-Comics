// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import styles from '../../css/profile.css';

// our packages

import {updateUser} from '../../store/actions';

const mapStateToProps = state => ({
  redirectToProfile: state.auth.redirectToProfile,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onUpdateClick: params => dispatch(updateUser(params)),
});

const UpdateUser = ({onUpdateClick, user, onClick}) => {
  let usernameInput;
  let passwordInput;
  let passwordInputRepeat;

  const handleClick = (e) => {
    e.preventDefault();

    onUpdateClick({
      login: usernameInput.value,
      password: passwordInput.value,
      passwordRepeat: passwordInputRepeat.value,
      id: user.id,
    });
  };

  return (
      <form>
        <div className={`${styles.form_group}`}>
          <label htmlFor="inputUsername">Username:</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            ref={(i) => { usernameInput = i; }}
          />
        </div>
        <div className={`${styles.form_group}`}>
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            ref={(i) => { passwordInput = i; }}
          />
        </div>
        <div className={`${styles.form_group}`}>
          <label htmlFor="inputPasswordRepeat">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordRepeat"
            ref={(i) => { passwordInputRepeat = i; }}
          />
        </div>
        <button type="submit" className="btn btn-outline-warning waves-effect "
         onClick={handleClick} style={{ backgroundColor:'#fff'}}><strong>Update</strong></button>
      </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
