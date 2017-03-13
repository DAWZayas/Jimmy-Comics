import React from 'react';
import {connect} from 'react-redux';

import {removeNotificationAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onRemoveNotificationClick: notificationId => dispatch(removeNotificationAction(notificationId)),
});

const UpdateComicNotification = ({notificationId, comic, onRemoveNotificationClick}) => {
  const onClickUpdate = (e) => {
    e.preventDefault();
    onRemoveNotificationClick(notificationId);
    onGetRatingsClick(comic.id);
    return false;
  };

  const textAlert = (
    <div>
      Comic with rating &quot;{comic.title}&quot; has been externally modified.
      Pulse <a href="#" onClick={onClickUpdate}>here</a> to update.
    </div>);

  return textAlert;
};

export default connect(null, mapDispatchToProps)(UpdateComicNotification);
