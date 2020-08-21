import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import cameraIcons from '../../assets/ar-camera.png';

import api from '../../services/api';

import { Container } from './styles';

function EventsPage({ history }) {
  const user_id = localStorage.getItem('user');
  const [thumbnail, setThumbnail] = useState(null);
  const [formEventData, setFormEventData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    date: '',
  });

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();

    const { category, date, description, price, title } = formEventData;

    const eventData = new FormData();

    eventData.append('thumbnail', thumbnail);
    eventData.append('title', title);
    eventData.append('description', description);
    eventData.append('price', price);
    eventData.append('date', date);
    eventData.append('category', category);

    try {
      if (
        title !== '' &&
        description !== '' &&
        price !== '' &&
        date !== '' &&
        category !== '' &&
        thumbnail !== null
      ) {
        await api.post('/event', eventData, { headers: { user_id } });

        toast.info('Event created successully', {
          className: 'toast',
        });

        history.push('/');
      } else {
        toast.error('Event not add, try again later.', {
          className: 'toast-erro',
        });
      }

    } catch (error) {
      console.log('Deu ruim', error);
    }
  };

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormEventData({
      ...formEventData,
      [name]: value,
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <legend>
          <h2>Crie o seu evento!</h2>
        </legend>

        <div className="field-group">
          <div className="field">
            <label id="thumbnail"
              style={{ backgroundImage: `url(${preview})` }}
              className={thumbnail ? 'has-thumbnail' : ''}
            >
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                required
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
              <img src={cameraIcons} style={{ maxWidth: "100px" }} alt="upload" />
            </label>
          </div>
        </div>

        <div className="field">
          <label htmlFor="name">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="field">
          <label htmlFor="name">Descrição</label>
          <input
            type="text"
            name="description"
            id="description"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="field">
          <label htmlFor="name">Categoria</label>
          <input
            type="text"
            name="category"
            id="category"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="price-date">
          <div className="field" id="price" >
            <label htmlFor="name">Preço</label>
            <input
              type="text"
              name="price"
              id="price"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="name">Data</label>
            <input
              type="date"
              name="date"
              id="date"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit">
          Cadastrar evento
        </button>
        <Link to="/" className="signup">
          <br />
            Voltar
        </Link>
      </form>
    </Container>
  );
}

export default EventsPage;