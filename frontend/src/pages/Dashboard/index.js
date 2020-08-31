import React, { useEffect, useState, useMemo, useCallback } from 'react';
import moment from 'moment';

import { toast } from 'react-toastify';

import LogOutButton from '../../components/LogOutButton';
import Notifications from '../../components/Notifications';

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
  const [button, setButton] = useState('Meus Eventos')
  const [deleteButton, setDeleteButton] = useState(false);
  const user_id = localStorage.getItem('user');

  const getEvent = useCallback(async () => {
    const response = await api.get('/dashboard', { headers: { user_id } });

    setEvents(response.data);
  }, [user_id]);

  const handleMyEvents = useCallback(async () => {
    if (button === 'Meus Eventos') {
      const response = await api.get('/myevents', { headers: { user_id } });
      setDeleteButton(true);
      setButton('Todos');
      setEvents(response.data);
    } else {
      const response = await api.get('/dashboard', { headers: { user_id } });
      setDeleteButton(false);
      setButton('Meus Eventos');
      setEvents(response.data);
    }
  }, [user_id, button]);

  const handleDeleteEvent = useCallback(async (id) => {
    try {
      const response = await api.delete(`/event/${id}`, { headers:  { user_id } });

      const { message } = response.data;

      toast.info(message, {
        className: 'toast',
      });

      setTimeout(() => {
        handleMyEvents();
      }, 2000);

    } catch (error) {

      toast.error('Error while deleting the event, try again later.', {
        className: 'toast-erro',
      });
    }
  }, [handleMyEvents]);

  const handleRegistration = useCallback(async(eventId, eventDate) => {
    try {
      const response = await api.post(`/registration/${eventId}`, { date: eventDate}, {headers: {user_id}});

      console.log('handleRegistration', response.data);
    } catch (error) {
      console.log('erro handle REgistration', error)
    }
  }, []);

  useEffect(() => {
    getEvent();
  }, [getEvent]);

  return (
    <>
      <LogOutButton history={history} />
      <Notifications user_id={user_id}/>
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
            >{button}</button>
          </div>

        </div>

        {squery ?
          <EventList
            events={events}
            squery={squery}
          /> :
          <ul>
            {events.map(event => (
              <li key={event.id}>
                <img src={event.thumbnail_url} alt="event" />
                <h2>{event.title}</h2>
                <strong>{event.category}</strong>
                <p>{event.description}</p><br />
                <p>{moment(event.date).format('DD/MM/YYYY')}</p><br />
                <h2>{parseFloat(event.price).toFixed(2)}</h2>

                {deleteButton ?
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteEvent(event.id)}
                  >Delete</button>
                  : null
                }
                {button === 'Meus Eventos' ? 
                  <button 
                    onClick={() => handleRegistration(event.id, event.date)}
                  >Participar</button> : 
                  <button>Editar</button>}

              </li>
            ))}
          </ul>
        }
      </Container>
    </>
  );
}

export default Dashboard;