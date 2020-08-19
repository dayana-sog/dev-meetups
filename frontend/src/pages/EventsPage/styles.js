import styled from 'styled-components';

export const Container = styled.div`

  legend {
    text-align: center;
  }

  label#thumbnail {
    margin: 30px 0;
    border: 1px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 410px;
  }

  label#thumbnail input {
    display: none;
  }

  label#thumbnail.has-thumbnail {
    border: 0;
  }

  label#thumbnail.has-thumbnail img{
    display: none;
  }

  form {
    margin: 50px auto;
    padding: 64px;
    max-width: 730px;
    background: #909090;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    .field {
      flex: 1;

      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }

    label {
      font-size: 16px;
      margin-bottom: 8px;
    }

    input {
      flex: 1;
      background: #F0F0F5;
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: #6C6C80;
    }

    button {
      width: 260px;
      height: 56px;
      background: #78D0d3;
      border-radius: 8px;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      align-self: center;
      margin-top: 40px;
      transition: background-color 0.2s;
      cursor: pointer;
    }

    .signup {
      text-align: center
    }

    .price-date {
      display: flex;
      justify-content: space-between;

      #price {
        margin-right: 1rem;
      }
    }
  }
`;
