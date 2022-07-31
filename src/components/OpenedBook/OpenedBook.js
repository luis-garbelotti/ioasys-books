import {
  CloseButton, Container, Header, Content,
  BookImage, BookData, BookTitle, BookAuthors,
  BookInfoHeader, BookInfoContent, BookDescription
} from './style';
import { MdClose } from 'react-icons/md';
import undefinedImage from '../../assets/images/undefined.png';
import { useEffect } from 'react';
import quotes from '../../assets/images/Quotes.png';

export function OpenedBook({ isOpen, setIsBookOpen, bookInfo, bookAuthors }) {
  useEffect(() => { }, [bookAuthors]);

  return (
    <Container isOpen={isOpen}>
      <Header>
        <CloseButton onClick={() => setIsBookOpen(false)}>
          <MdClose />
        </CloseButton>
      </Header>
      <Content>
        <BookImage src={bookInfo?.imageUrl ? bookInfo.imageUrl : undefinedImage} />
        <BookData>
          <BookTitle>
            {bookInfo?.title}
          </BookTitle>
          <BookAuthors>
            <h3>
              {bookAuthors}
            </h3>
          </BookAuthors>
          <BookInfoHeader>
            INFORMAÇÕES
          </BookInfoHeader>

          <BookInfoContent>
            <h2>Páginas</h2>
            <span>{bookInfo?.pageCount}</span>
          </BookInfoContent>

          <BookInfoContent>
            <h2>Editora</h2>
            <span>{bookInfo?.publisher}</span>
          </BookInfoContent>

          <BookInfoContent>
            <h2>Publicação</h2>
            <span>{bookInfo?.published}</span>
          </BookInfoContent>

          <BookInfoContent>
            <h2>Idioma</h2>
            <span>{bookInfo?.language}</span>
          </BookInfoContent>

          <BookInfoContent>
            <h2>Título Original</h2>
            <span>{bookInfo?.title}</span>
          </BookInfoContent>

          <BookInfoContent>
            <h2>ISBN-10</h2>
            <span>{bookInfo?.isbn10}</span>
          </BookInfoContent>

          <BookInfoContent>
            <h2>ISBN-13</h2>
            <span>{bookInfo?.isbn13}</span>
          </BookInfoContent>

          <BookInfoHeader>
            RESENHA DA EDITORA
          </BookInfoHeader>
          <BookDescription>
            <img src={quotes} />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {bookInfo?.description}
            </p>
          </BookDescription>
        </BookData>
      </Content>
    </Container>
  );
}
