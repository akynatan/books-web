import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    .ReactModal__Content {
      width: 80%;
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

export const Book = styled.div`
  display: flex;
  margin: 16px;
  background: #fff;
  border-radius: 4px;
  color: #333333;
  line-height: 20px;
  align-items: center;
  font-size: 12px;
  font-weight: 600;

  img {
    padding-top: 16px;
    height: 400px;
  }

  h3 {
    font-size: 28px;
  }

  .authors {
    color: #ab2680;
  }

  .title-book_mobile {
    display: none;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;

    .title-book_mobile {
      display: block;
    }

    .title-book_web {
      display: none;
    }

    .authors {
      text-align: center;
      width: 100%;
    }
  }
`;

export const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 400px;
  height: auto;
  width: auto;
  margin-left: 20px;

  div {
    padding-top: 16px;
  }

  h4 {
    font-weight: 600;
  }

  table {
    width: 100%;
    tr {
      display: flex;
      justify-content: space-between;
    }
  }

  .vlr {
    color: #999999;
  }

  @media only screen and (max-width: 750px) {
    margin-left: 0;
  }
`;
