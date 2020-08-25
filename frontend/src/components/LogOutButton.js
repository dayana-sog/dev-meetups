import React, {useCallback} from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';

const LogOutButton = ({ history }) => {

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');

    toast.info('We appreciate your visit, come back always.', {
      className: 'toast-exit',
    });

    setTimeout(() => {
      history.push('/login');
    }, 2000);
  }, [history]); 


  return (
    <Container>
      <button onClick={handleLogOut}>Logout</button>
    </Container>
  )
};

export default LogOutButton;