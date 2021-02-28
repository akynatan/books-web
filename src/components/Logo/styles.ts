import styled, { css } from 'styled-components';

interface ContentLogoProps {
  light: boolean;
}

export const ContentLogo = styled.div<ContentLogoProps>`
  display: flex;
  color: #333333;

  ${props =>
    props.light &&
    css`
      color: #ffff;
    `}

  h1 {
    margin-left: 16px;
  }
`;
