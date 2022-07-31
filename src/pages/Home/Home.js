import {
  Book, BookAuthor, BookContent, BookData,
  BookInfo, BooksContainer, BookTitle,
  Container, Content,
  Footer, FooterButtons,
  Header, HeaderInfos, HeaderText,
  Logout
} from './style';
import { BlackLogo } from '../../components/Logo/BlackLogo';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import api from '../../services/api';
import undefinedImage from '../../assets/images/undefined.png';
import { NextButton } from '../../components/HomeButtons/NextButton';
import { BackButton } from '../../components/HomeButtons/BackButton';
import Swal from 'sweetalert2';
import { OpenedBook } from '../../components/OpenedBook/OpenedBook';

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
        refreshToken();
      }
    }
  }

  function handlePages(page, maxPages) {
    setPageNumber(page);
    setTotalPages(maxPages);

    if (page !== 1) {
      setIsFirstPage(false);
    }
    if (pageNumber === maxPages) {
      setIsLastPage(true);
    }
  }

  async function handleChangePage(e, newPage) {
    e.preventDefault();
    const nextPage = newPage;

    if (newPage === 0) {
      return;
    }

    if (newPage === totalPages + 1) {
      return;
    }

    if (pageNumber === 1 || newPage === 1) {
      setIsFirstPage(true);
      setBackDisabled(true);
    }

    if (newPage === totalPages) {
      setNextDisabled(true);
      setIsLastPage(true);
    }

    try {
      const promise = await api.changePage(nextPage, auth.token);
      setBooksData(promise.data);
      setBackDisabled(false);
      setNextDisabled(false);

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
        refreshToken();
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
        refreshToken();
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.errors.message}`,
      });
      return;
    }
  }

  function handleLogout() {
    logout();
    navigate('/');
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
          <Header>
            <BlackLogo />
            <HeaderInfos>
              <HeaderText>
                {auth?.name ?
                  <span>Bem vindo, <strong>{auth.name}!</strong></span>
                  :
                  ''
                }
              </HeaderText>
              <Logout onClick={handleLogout}>
                <FiLogOut />
              </Logout>
            </HeaderInfos>
          </Header>

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
