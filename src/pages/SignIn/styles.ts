import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.webp';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;

  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 340px;
  margin-left: 115px;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    text-align: center;
    width: 100%;

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const ErroLogin = styled.div`
  width: 240px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;

  animation: ${appearFromLeft} 1s;

  span {
    font-weight: 700;
    transition: opacity 0.4s;

    color: #fff;
  }

  &::before {
    content: '';
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.4) transparent;
    border-width: 0px 8px 8px 8px;
    position: absolute;
    transform: translateY(-28px) translateX(-90px);
  }
`;
