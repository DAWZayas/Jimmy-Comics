// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

// our packages
import {loginAction} from '../../store/actions';
import GitHubLogo from '../../components/github';
import GoogleLogo from '../../components/google';
import FacebookLogo from '../../components/facebook';

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
});

const Login = ({onLoginClick}) => {
  let usernameInput;
  let passwordInput;
  let rememberInput;

  const handleClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
      remember: rememberInput.checked,
    });
  };

  return (
    <div className="container" style={{marginTop: '100px'}}>
      <div className="jumbotron">
        <h2>Jimmy Comics</h2>
        <div className="row">
            <p><strong>Please log in. Or <Link to="/register" style={{ color:'#ff610f'}}>register</Link></strong></p>
          <div className="col-xs-2">
            <GitHubLogo />
            <GoogleLogo />
            <FacebookLogo />
          </div>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="inputUsername">Username:</label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Username"
              ref={(i) => { usernameInput = i; }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              ref={(i) => { passwordInput = i; }}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="inputRemember">
              <input
                type="checkbox"
                id="inputRemember"
                ref={(i) => { rememberInput = i; }}
              /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-warning" style={{ backgroundColor:'#ff610f'}} onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Login);
