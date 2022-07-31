import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import {
  Book, BookAuthor, BookContent, BookData,
  BookInfo, BooksContainer, BookTitle,
  Container, Content,
  Footer, FooterButtons,
} from './style';
import undefinedImage from '../../assets/images/undefined.png';
import { NextButton } from '../../components/HomeButtons/NextButton';
import { BackButton } from '../../components/HomeButtons/BackButton';
import { OpenedBook } from '../../components/OpenedBook/OpenedBook';
import api from '../../services/api';

import Swal from 'sweetalert2';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';

export function Home() {
  const { auth, logout, login } = useAuth();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [booksData, setBooksData] = useState();
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState();
  const [bookAuthors, setBookAuthors] = useState();

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    if (!auth || !auth.token || auth === null) {
      navigate('/');
      return;
    }

    await findBooks();
  }, []);

  async function findBooks() {
    let maxPages;

    try {
      const promise = await api.getBooks(pageNumber, auth.token);
      let page = promise.page;

      setBooksData(promise.data);

      const pageRound = Math.floor(promise.totalPages);
      if (pageRound < promise.totalPages) {
        maxPages = pageRound + 1;
      } else {
        maxPages = pageRound;
      }

      handlePages(page, maxPages);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.errors.message}`,
        });
        return;
      }

      if (error.response.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.errors.message}`,
        });
        return;
      }

      if (error.response.status === 401) {
        await refreshToken();
      }
    }
  }

  function handlePages(page, maxPages) {
    setPageNumber(page);
    setTotalPages(maxPages);

    if (page !== 1) {
      setIsFirstPage(false);
    }
    if (page === maxPages) {
      setIsLastPage(true);
    }
  }

  async function handleChangePage(e, newPage) {
    e.preventDefault();

    if (newPage === 0) {
      return;
    }

    if (newPage === totalPages + 1) {
      return;
    }

    try {
      const promise = await api.changePage(newPage, auth.token);
      setBooksData(promise.data);
      setBackDisabled(false);
      setNextDisabled(false);
      setIsLastPage(false);
      setIsFirstPage(false);

      if (promise.page === 1 || newPage === 1) {
        setIsFirstPage(true);
        setBackDisabled(true);
      }

      if (promise.page === totalPages) {
        setNextDisabled(true);
        setIsLastPage(true);
      }

      handlePages(promise.page, totalPages);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.errors.message}`,
        });
        return;
      }

      if (error.response.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.errors.message}`,
        });
        return;
      }

      if (error.response.status === 401) {
        await refreshToken();
      }
    }
  }

  async function handleOpenBook(e, bookId) {
    e.preventDefault();

    try {
      const promise = await api.getBookInfo(bookId, auth.token);
      formatAuthors(promise.authors);
      setBookInfo(promise);
      setIsBookOpen(true);
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.errors.message}`,
        });
        return;
      }

      if (error.response.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.errors.message}`,
        });
        return;
      }

      if (error.response.status === 401) {
        await refreshToken();
      }
    }
  }

  function formatAuthors(authors) {
    let formatedAuthors = '';
    for (let i = 0; i < authors.length; i++) {
      if (i === authors.length - 1) {
        formatedAuthors += authors[i];
        setBookAuthors(formatedAuthors);
        return;
      }
      formatedAuthors += authors[i] + ', ';
    }
  };

  async function refreshToken() {
    try {
      const body = {
        refreshToken: auth['refresh_token']
      };

      const promise = await api.refreshToken(body);
      const newAuth = {
        ...auth,
        token: promise.authorization,
        refresh_token: promise['refresh-token']
      };

      login(newAuth);
    } catch (error) {
      logout();
      navigate('/');
    }
  }

  return (
    <>
      <Container>
        <OpenedBook
          isOpen={isBookOpen}
          setIsBookOpen={setIsBookOpen}
          bookInfo={bookInfo}
          bookAuthors={bookAuthors}
        />

        <Content>
          <HomeHeader name={auth.name} />

          <BooksContainer>
            {!booksData ? '' :
              booksData.map((book) =>
                <Book key={book.id} onClick={(e) => handleOpenBook(e, book.id)}>
                  <BookContent>
                    <img src={book.imageUrl ? book.imageUrl : undefinedImage} />
                    <BookInfo>
                      <div>
                        <BookTitle>{book.title}</BookTitle>
                        {book.authors.map((author) =>
                          <BookAuthor key={author} >{author}</BookAuthor>
                        )}
                      </div>
                      <div>
                        <BookData>{book.pageCount} páginas</BookData>
                        <BookData>Editora {book.publisher} </BookData>
                        <BookData>Publicado em {book.published}</BookData>
                      </div>
                    </BookInfo>
                  </BookContent>
                </Book>
              )}
          </BooksContainer>
          <Footer >
            {totalPages && pageNumber ?
              <h1>Página {pageNumber} de {totalPages}</h1> : ''
            }
            <FooterButtons >
              <BackButton
                isFirstPage={isFirstPage}
                onClick={(e) => handleChangePage(e, pageNumber - 1)}
                disabled={backDisabled} />
              <NextButton
                isLastPage={isLastPage}
                onClick={(e) => handleChangePage(e, pageNumber + 1)}
                disabled={nextDisabled} />
            </FooterButtons>
          </Footer>
        </Content>
      </Container>
    </>
  );
}
