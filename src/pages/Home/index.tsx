import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';
import Select from 'react-select';

import 'react-day-picker/lib/style.css';

import Logo from '../../components/Logo';
import Book from '../../components/Book';
import Loading from '../../components/Loading';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  Pagination,
} from './styles';

interface Book {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  published: number;
  publisher: string;
}

const Home: React.FC = () => {
  const { signOut, user } = useAuth();
  const { name } = user;
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [qtdTotalPages, setQtdTotalPages] = useState(0);
  const [category, setCategory] = useState('biographies');
  const [loading, setLoading] = useState(true);

  const options = [
    { value: 'biographies', label: 'biographies' },
    { value: 'collections', label: 'collections' },
    { value: 'behavior', label: 'behavior' },
    { value: 'tales', label: 'tales' },
    { value: 'literary-criticism', label: 'literary-criticism' },
    { value: 'scienceFiction', label: 'scienceFiction' },
    { value: 'folklore', label: 'folklore' },
    { value: 'genealogy', label: 'genealogy' },
    { value: 'humor', label: 'humor' },
    { value: 'children', label: 'children' },
    { value: 'games', label: 'games' },
    { value: 'newspapers', label: 'newspapers' },
    { value: 'brazilian-literature', label: 'brazilian-literature' },
    { value: 'foreign-literature', label: 'foreign-literature' },
    { value: 'rare-books', label: 'rare-books' },
    { value: 'manuscripts', label: 'manuscripts' },
    { value: 'poetry', label: 'poetry' },
    { value: 'anothe', label: 'anothe' },
  ];

  useEffect(() => {
    setLoading(true);
    api
      .get(`books`, {
        params: {
          page,
          amount: 12,
          category,
        },
      })
      .then(response => {
        const { data, totalPages } = response.data;
        setBooks(data);
        setQtdTotalPages(Math.ceil(totalPages));
        setLoading(false);
      });
  }, [page, category]);

  const incrementPage = useCallback(() => {
    setPage(pagCurrent => {
      return pagCurrent + 1;
    });
  }, []);

  const decrementPage = useCallback(() => {
    setPage(state => {
      return state - 1;
    });
  }, []);

  const handleCategory = useCallback(selectedCategory => {
    setCategory(selectedCategory.value);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo />

          <div>
            <span>
              Bem vindo, <strong>{name}</strong>!
            </span>
            <button type="button" onClick={signOut}>
              <FaSignOutAlt size={20} />
            </button>
          </div>
        </HeaderContent>
      </Header>

      <Content>
        <div className="select-category">
          <label htmlFor="category">Categoria:</label>
          <Select
            id="category"
            defaultValue={options[0]}
            options={options}
            onChange={handleCategory}
            style={{ width: '200px!important' }}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="list-container">
            {books.map(book => {
              const {
                id,
                title,
                authors,
                pageCount,
                imageUrl,
                published,
                publisher,
              } = book;
              return (
                <Book
                  key={id}
                  id={id}
                  title={title}
                  authors={authors}
                  pageCount={pageCount}
                  imageUrl={imageUrl}
                  published={published}
                  publisher={publisher}
                />
              );
            })}
          </div>
        )}
        <Pagination>
          <span>
            Pagina {page} de {qtdTotalPages}
          </span>
          <button
            type="button"
            disabled={page === 1}
            onClick={decrementPage}
            title="Anterior Pagina"
          >
            <FiArrowLeftCircle />
          </button>
          <button
            type="button"
            disabled={page === qtdTotalPages}
            onClick={incrementPage}
            title="Pagina Próxima"
          >
            <FiArrowRightCircle />
          </button>
        </Pagination>
      </Content>
    </Container>
  );
};

export default Home;
