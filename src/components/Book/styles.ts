import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px;
  margin: 16px;
  width: 272px;
  height: 190px;
  background: #fff;
  border-radius: 4px;
  color: #333333;
  line-height: 20px;
  align-items: center;

  img {
    width: 80px;
    height: 120px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;

    h3 {
      font-size: 14px;
    }

    .author {
      color: #ab2680;
    }

    span {
      font-size: 12px;
      color: #999999;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }
`;
