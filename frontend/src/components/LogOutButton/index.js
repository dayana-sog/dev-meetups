import React, {useCallback} from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';

const LogOutButton = ({ history }) => {

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('user');

    toast.info('We appreciate your visit, come back always ', {
      className: 'toast',
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