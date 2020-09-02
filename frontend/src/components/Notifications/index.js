import React, { useEffect, useState, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';

import api from '../../services/api';

import { 
  Container, 
  Badge, 
  Notification, 
  NotificationList, 
  Scroll, 
} from './styles';

const Notifications = ({user_id}) => {
  // const [visible, setVisible] = useState(false);
  // const [notifications, setNotifications] = useState([]);

  // const hasUnread = useMemo(
  //   () => !!notifications.find((notification) => notification.read === false),
  //   [notifications]
  // )

  useEffect(() => {
    (async function() {
      try {
        const response = await api.get('/registration/',  { headers:  { user_id } });
  
        console.log(response.data);
      } catch (error) {
        
      }

    })();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }


  return (
    <Container>
      {/* <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#78d0d3" size={20} />
      </Badge> */}

      {/* <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList> */}
    </Container>
  );
};

export default Notifications;