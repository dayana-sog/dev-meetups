import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Background, Content } from './styles';

function Login({ history }) {
  const [formData, setFormData] = useState({
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

    const { email, password } = formData;
    const data = {
      email,
      password
    };

    const response = await api.post('login', data);
    const user = response.data._id || false;

    if (user) {
      localStorage.setItem('user', user);
      

      history.push('/');
    } else {
      const { message } = response.data;

      toast.info(message, {
        className: 'toast-erro',
      });
    };
  };


  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <legend>
            <h2>Login</h2>
          </legend>

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
            <label htmlFor="name">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              required
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">
            Login
          </button>
          <Link to="/register" className="signup">
            <br/>
            Cadastrar-se
          </Link>
        </form>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;