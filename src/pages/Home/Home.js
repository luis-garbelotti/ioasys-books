import { Book, BookAuthor, BookContent, BookData, BookInfo, BooksContainer, BookTitle, Container, Content, Footer, FooterButtons, Header, HeaderInfos, HeaderText, Logout } from './style';
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

export function Home() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [booksData, setBooksData] = useState();
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

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
      // se erro 401, refresh-token
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

  function handleLogout() {
    logout();
    navigate('/');
  }

  async function handleNextPage(e) {
    e.preventDefault();

    if (pageNumber === totalPages) {
      setNextDisabled(true);
      setIsLastPage(true);
      return;
    }

    const nextPage = pageNumber + 1;
    try {
      const promise = await api.nextPage(nextPage, auth.token);
      setBooksData(promise.data);

      handlePages(promise.page, totalPages);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '"Authorization" header is missing',
        });
        return;
      }

      if (error.response.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Infelizmente, algo deu errado.',
        });
        return;
      }

      if (error.response.status === 401) { // refresh-token
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não autorizado.',
        });
        return;
      }
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Header>
            <BlackLogo />
            <HeaderInfos>
              <HeaderText>
                {auth?.name ?
                  <>
                    <span>Bem vindo, <strong>{auth.name}!</strong></span>
                  </>
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
                <Book key={book.id}>
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
              <BackButton isFirstPage={isFirstPage} /* onClick={handleBackPage} */ />
              <NextButton isLastPage={isLastPage} onClick={handleNextPage} disabled={nextDisabled} />
            </FooterButtons>
          </Footer>
        </Content>
      </Container>
    </>
  );
}
