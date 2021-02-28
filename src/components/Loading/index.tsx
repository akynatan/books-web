import React from 'react';
import livroGif from '../../assets/livro.gif';

import { Container } from './styles';

const Loading: React.FC = () => (
  <Container>
    <img src={livroGif} alt="Livro Gif" />
  </Container>
);

export default Loading;
