import React from 'react';
import { connect } from 'react-redux';
import classes from './UploadPhoto.module.scss';
import axios from '../../utils/Axios';
import placeHolder from '../../assets/users/no_avatar.png';
import * as authActions from '../../store/actions/auth/actions';
import config from '../../config';

const fileChangedHandler = async (event, updatePhoto) => {
  const formData = new FormData();
  formData.append('photo', event.target.files[0], event.target.files[0].name);
  const results = await axios.patch('/users/photo', formData);
  updatePhoto(results.data.data.user.photo);
};

const addDefaultSrc = (event) => {
  event.target.src = placeHolder;
};

const UploadPhoto = (props) => {
  return (
    <div className={classes.userSetting}>
      <label htmlFor="uploadPhoto">
        <figure className={classes.userSetting__avatar}>
          <img
            src={`${config.IMAGES_PATH}/users/${props.user.photo}`}
            alt="User"
            onError={addDefaultSrc}
          />
          <input
            className={classes.userSetting__avatar__input}
            type="file"
            onChange={(event) => {
              fileChangedHandler(event, props.updatePhoto);
            }}
            id="uploadPhoto"
          />
          <span className={classes.userSetting__avatar__caption}>Edit</span>
        </figure>
      </label>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ...state.auth };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePhoto: (photo) => {
      dispatch(authActions.updateAvatar(photo));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);
