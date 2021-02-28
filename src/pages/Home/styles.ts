import styled from 'styled-components';

import homeBackgroundImg from '../../assets/home-background.webp';

export const Container = styled.div`
  background: url(${homeBackgroundImg}) no-repeat center;
  background-size: cover;
  background-blend-mode: darken;
  color: #333333;
  padding-bottom: 20px;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 32px 20px;
  color: #333333;
`;

export const HeaderContent = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;

    button {
      margin-left: 20px;
      background: transparent;
      border: 0;
      cursor: pointer;

      svg {
        color: #333333;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    span {
      display: none;
    }
  }
`;

export const Content = styled.main`
  margin: 0 auto;
  padding: 0 40px;

  .select-category {
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      margin-right: 10px;
    }

    #category {
      width: 250px;
    }

    @media only screen and (max-width: 400px) {
      flex-direction: column;
    }
  }

  div.list-container {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;

    @media only screen and (max-width: 350px) {
      padding: 0;
    }
  }

  @media only screen and (max-width: 740px) {
    padding: 0 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  button {
    background: transparent;
    border: 0;

    svg {
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`;
