// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import {twitterLoginAction} from '../../store/actions';
import twitterLogo from '../../img/twitter.png';
import {popupwindow} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

const mapDispatchToProps = dispatch => ({
  handleTwitterLogin: payload => dispatch(twitterLoginAction(payload)),
});

const authUrl = `http://${host}:${port}/api/twitter/login`;

let authWindow = null;

const authorize = () => {
  if (authWindow) {
    return Promise.resolve({
      error: 'Waiting until login process is completed',
    });
  }
  authWindow = popupwindow(authUrl, 'Twitter Login', 300, 300);
  return new Promise((resolve) => {
    const checkResponse = () => {
      const hash = window.location.hash;
      window.location.hash = '';

      const token = /[#?;,&]token=([^&]+)/.exec(hash);
      const user = /[#?;,&]user=([^&]+)/.exec(hash);
      const error = /[#?;,&]error=([^&]+)/.exec(hash);

      if (error || !token) {
        return resolve({
          error: error ? error[1] : 'no access token',
        });
      }
      return resolve({
        token: token[1],
        user: JSON.parse(unescape(user[1])),
      });
    };
    const checkConnect = setInterval(() => {
      if (!authWindow || !authWindow.closed) {
        return;
      }
      clearInterval(checkConnect);
      authWindow = null;
      checkResponse();
    }, 100);
  });
};

const TwitterLogin = ({handleTwitterLogin}) => {
  const handleClickEvent = (e) => {
    e.preventDefault();
    authorize()
    .then(payload => handleTwitterLogin(payload))
    .catch(payload => handleTwitterLogin(payload));
    return false;
  };

  return (
    <img
      src={twitterLogo}
      className="img-responsive"
      alt="Twitter login"
      style={{cursor: 'pointer'}}
      onClick={handleClickEvent}
    />
  );
};

export default connect(null, mapDispatchToProps)(TwitterLogin);
