import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import modal from '../../css/modal.css';
import UpdateProfile from './updateProfile';
import UpdateUser from './updateUser';
import UpdateAvatar from './updateAvatar';
import styles from '../../css/profile.css';
import {server as serverConfig} from '../../../config';

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
});

const Profile = ({user}) => (
  <div>
      <div className="card-block">
      <div className="col-xs-12 col-sm-4">
        <a href="#modalAvatar">
          <img
            key={Math.random() + 'avatar'}
            src={ user.image ||
              "https://pbs.twimg.com/profile_images/764592533636808704/YGrGoK0_.jpg"}
            className={`${styles.avatar}`}
            style={{display:"inlineBlock", margin:"auto", marginBottom:20, width:200}}
           />
        </a>
      </div>


      <div className="col-xs-12 col-sm-8 text-xs-center text-sm-left">
        <strong>Logged as {user.login}{user.provider ? ` (${user.provider})` : null} <a style={{ color:"#000000", marginLeft:15}} href="#modalUser">
          <span className="fa fa-edit fa-2x" /></a></strong><br />
          Active Since {user.registrationDate}<br />
      </div>
    </div>

    <div id="modalUser" className={modal.overlay}>
       <div className={modal.popup}>
        <h2>UPDATE USER</h2>
        <a className={modal.close} href="#a">&times;</a>
         <div className={modal.content}>
          <hr />
          <UpdateUser />
         </div>
       </div>
    </div>

    <div id="modalProfile" className={modal.overlay}>
       <div className={modal.popup}>
        <h2>UPDATE PROFILE</h2>
        <a className={modal.close} href="#a">&times;</a>
         <div className={modal.content}>
          <hr />
          <UpdateProfile />
         </div>
       </div>
    </div>

    <div id="modalAvatar" className={modal.overlay}>
       <div className={modal.popup}>
        <h2>UPDATE AVATAR</h2>
        <a className={modal.close} href="#a">&times;</a>
         <div className={modal.content}>
          <hr />
          <UpdateAvatar />
         </div>
       </div>
    </div>

    <div className="card-block">
      <div className="col-xs-12 col-sm-10">
        <h2 className={`${styles.profile_title}`}>PROFILE <a style={{ color:"#fff"}} href="#modalProfile">
          <span className="fa fa-edit fa-2x pull-right" /></a></h2>

          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Surname:</td>
                <td>{user.surname}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>


);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
