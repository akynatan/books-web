import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #fff;
    `}

  ${props =>
    props.isField &&
    css`
      color: #fff;
    `}

  & + div {
    margin-top: 8px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      color: #c6a6ac;
    }

    input {
      background: transparent;
      flex: 1;
      padding-top: 10px;
      border: 0;
      color: #fff;
      width: 135%;
      line-height: 24px;

      &::placeholder {
        color: #9e8080;
      }
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
