import React from 'react';

import { Container } from './styles';
import { useModal } from '../../hooks/modal';

interface BookProps {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  published: number;
  publisher: string;
}

const Book: React.FC<BookProps> = ({
  id,
  title,
  authors,
  pageCount,
  imageUrl,
  published,
  publisher,
}) => {
  const { addModal } = useModal();

  return (
    <Container onClick={() => addModal(id)}>
      <img src={imageUrl} alt="" />
      <div>
        <div>
          <h3>{title}</h3>
          {authors.map(author => (
            <span key={author} className="author">
              {author}
            </span>
          ))}
        </div>
        <div>
          <span>{pageCount} páginas</span>
          <span>Editora {publisher}</span>
          <span>Publicado em {published}</span>
        </div>
      </div>
    </Container>
  );
};

export default Book;
