import styled from 'styled-components';
import signInBackground from '../../assets/meet.jpg';



export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    background: #fd2f51;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 600px;

    legend {
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: bold;
      text-align: center;
    }

    label {
      margin: 0 0 1rem 1.5rem;
      
      text-align: left; 
    }

    form {
      margin: 80px 0;
      width: 340px;
      
      font-size: 2rem;

      input {
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 66px;
        font-size: 16px;
        color: #6C6C80;
        margin: 1rem 0 1.5rem 1rem;
      }

      button {
        width: 32rem;
        height: 56px;
        background: #2d2942;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        border: 0;
        transition: background-color 0.2s;
        margin-left: 1rem;
        margin-top: 2rem;
        cursor: pointer;
      }  
      
    .signup {
      background: #78D0d3;
      margin-top: 1rem;
      display: inline-block;


      width: 32rem;
      height: 56px;
      border-radius: 8px;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      transition: background-color 0.2s;
      margin-left: 1rem;
      cursor: pointer;

      text-align: center;
    }
  }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground}) no-repeat center;
    background-size: cover;
`;
