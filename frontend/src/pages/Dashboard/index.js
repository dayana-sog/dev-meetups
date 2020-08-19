import React, { useEffect, useState, useCallback, useMemo } from 'react';
import moment from 'moment';

import api from '../../services/api';

import { Container } from './styles';

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const user_id = localStorage.getItem('user');

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async (filter) => {

    const url = filter ? `/dashboard/${filter}` : '/dashboard'
    const response = await api.get(url, { headers: { user_id } });

    setEvents(response.data);
  };


  return (
    <Container>
      <h1>Meetings</h1>

      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ul>
        {events.map(event => (
          <li key={event.id}>
            <img src={event.thumbnail_url} alt="event image" />
            <h2>{event.title}</h2>
            <strong>{event.category}</strong>
            <p>{event.descripton}</p><br />
            <p>{moment(event.date).format('DD/MM/YYYY')}</p><br />
            <h2>{parseFloat(event.price).toFixed(2)}</h2>

            <button>Participar</button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;