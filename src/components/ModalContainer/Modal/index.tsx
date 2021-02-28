import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useModal } from '../../../hooks/modal';

import Loading from '../../Loading';

import api from '../../../services/api';

import { Container, ContentModal, Book, ContentInformation } from './styles';

interface ModalProps {
  idBook: string;
}

interface Book {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  published: number;
  publisher: string;
  isbn10: string;
  isbn13: string;
  language: string;
  description: string;
}

const ContainerModal: React.FC<ModalProps> = ({ idBook }) => {
  const [book, setBook] = useState<Book>({} as Book);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { removeModal } = useModal();

  useEffect(() => {
    setLoading(true);
    if (idBook !== '') {
      api.get(`books/${idBook}`).then(response => {
        setBook(response.data);
        setLoading(false);
      });
      setIsOpen(true);
    }
  }, [idBook]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    removeModal();
  }, [removeModal]);

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        id="modal"
        style={{ content: { width: '60%', margin: 'auto' } }}
      >
        <ContentModal>
          {loading ? (
            <Loading />
          ) : (
            <>
              {book && (
                <Book>
                  <div className="title-book_mobile">
                    <h3>{book.title}</h3>
                    <span className="authors">{book.authors.join(', ')}</span>
                  </div>
                  <img src={book.imageUrl} alt="" />
                  <ContentInformation>
                    <div className="title-book_web">
                      <h3>{book.title}</h3>
                      <span className="authors">{book.authors.join(', ')}</span>
                    </div>
                    <div>
                      <h4>INFORMAÇÕES</h4>
                      <table>
                        <tbody>
                          <tr>
                            <td>Páginas</td>
                            <td className="vlr">{book.pageCount}</td>
                          </tr>
                          <tr>
                            <td>Editora</td>
                            <td className="vlr">{book.publisher}</td>
                          </tr>
                          <tr>
                            <td>Publicação</td>
                            <td className="vlr">{book.published}</td>
                          </tr>
                          <tr>
                            <td>Idioma</td>
                            <td className="vlr">{book.language}</td>
                          </tr>
                          <tr>
                            <td>Título Original</td>
                            <td className="vlr">{book.title}</td>
                          </tr>
                          <tr>
                            <td>ISBN-10</td>
                            <td className="vlr">{book.isbn10}</td>
                          </tr>
                          <tr>
                            <td>ISBN-13</td>
                            <td className="vlr">{book.isbn13}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="description">
                      <h4>RESENHA DA EDITORA</h4>
                      <span className="vlr">{book.description}</span>
                    </div>
                  </ContentInformation>
                </Book>
              )}
            </>
          )}
        </ContentModal>
      </Modal>
    </Container>
  );
};

export default ContainerModal;
