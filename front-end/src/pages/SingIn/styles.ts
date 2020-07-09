import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/background_login.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  img {
    width: 250px;
  }

  form {
    margin: 50px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      font-size: 20px;
      color: #f4ede8;
      display: block;
      margin-top: 18px;
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }

      &:focus {
        text-decoration: underline;
      }
    }
  }

  > a {
    font-size: 20px;

    color: #fa3a3a;
    display: flex;
    text-decoration: none;
    transition: 0.5s;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#FA3A3A')};
    }

    &:focus {
      text-decoration: underline;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
