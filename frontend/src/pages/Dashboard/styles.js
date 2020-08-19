import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px auto;
    padding: 64px;
    max-width: 800px;
    background: #909090;
    border-radius: 8px;

  h1{
    text-align: center;
    margin-bottom: 20px;
  } 

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 6px;
      padding: 20px;
      img {
        align-self: center;
        max-width: 250px;
        margin-bottom: 20px;
      }

      button {
        height: 56px;
        background: #2d2942;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        border: 0;
        transition: background-color 0.2s;
        margin-top: 2rem;
        cursor: pointer;
      }
    }
  }
`;
