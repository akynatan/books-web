import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fff;
  height: 36px;
  width: 85px;
  border-radius: 44px;
  border: 0;
  padding: 0 16px;
  color: #b22e6f;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#fff')};
  }
`;
