import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Background, Content } from './styles';

function Register({ history }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email, password } = formData;
    const data = {
      firstName, 
      lastName,
      email,
      password
    };

    try {
      
      const response = await api.post('user/register', data);
      // const userExist = response.data || false;
      const { message } = response.data;

      if (message !== 'User alredy exists.') {  
        toast.info('User add with success. Do your login.', {
          className: 'toast',
        });

        setTimeout(() => {
          history.push('/login');
        }, 3000);
        
      } else {
        toast.info(message, {
          className: 'toast-erro',
        });
      };
    } catch (error) {
      toast.error(error, {
        className: 'toast-erro',
      });
    }
  };


  return (
    <Container>
      <Background />
      <Content>
        <form onSubmit={handleSubmit}>
          <legend>
            <h2>Cadastro</h2>
          </legend>

          <div className="field">
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              required
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">
            Cadastrar
          </button>
          <Link to="/login" className="signup">
            <br/>
            Voltar
          </Link>
        </form>
      </Content>
      
    </Container>
  );
}

export default Register; 