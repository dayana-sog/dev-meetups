import React, { useEffect, useState, useMemo, useCallback } from 'react';
import moment from 'moment';

import api from '../../services/api';

import { Container } from './styles';

const filter = (events, squery) =>
  events.filter(event => event.category.toLowerCase().includes(squery));

const EventList = ({ events, squery }) => {
  const filtered = useMemo(() => filter(events, squery), [events, squery]);

  return filtered.map(
    event => (
      <ul key={event.id} >
        <li>
          <img src={event.thumbnail_url} alt="event" />
          <h2>{event.title}</h2>
          <strong>{event.category}</strong>
          <p>{event.description}</p><br />
          <p>{moment(event.date).format('DD/MM/YYYY')}</p><br />
          <h2>{parseFloat(event.price).toFixed(2)}</h2>

          <button>Participar</button>
        </li>
      </ul>
    )
  )
};

function Dashboard({ history }) {
  const [events, setEvents] = useState([]);
  const [squery, setSQuery] = useState('')
  const user_id = localStorage.getItem('user');

  const getEvent = useCallback(async () => {
    const response = await api.get('/dashboard', { headers: { user_id } });

    setEvents(response.data);
  }, [user_id]);

  const handleMyEvents = useCallback(async() => {
    const response = await api.get('/myevents', { headers: { user_id } });

    setEvents(response.data);
  }, [user_id]);

  useEffect(() => {
    getEvent();
  }, [getEvent]);

  return (
    <Container>
      <h1>Meetings</h1>

      <div>
        <input
          type="text"
          placeholder="Busque Categoria de Evento"
          onChange={e => setSQuery(e.target.value)}
        />

        <div className="button-dash">
          <button 
            className="button-link"
            onClick={() => history.push('/events')}
          >Criar Evento</button>
          <button
            onClick={handleMyEvents}
          >Meus eventos</button>
        </div>

      </div>

      {squery ?
        <EventList events={events} squery={squery} /> :
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <img src={event.thumbnail_url} alt="event" />
              <h2>{event.title}</h2>
              <strong>{event.category}</strong>
              <p>{event.description}</p><br />
              <p>{moment(event.date).format('DD/MM/YYYY')}</p><br />
              <h2>{parseFloat(event.price).toFixed(2)}</h2>

              <button>Participar</button>
            </li>
          ))}
        </ul>
      }
    </Container>
  );
}

export default Dashboard;