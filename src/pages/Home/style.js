import styled from 'styled-components';
import img from '../../assets/images/homeBg.png';

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 42% 50%;
  background-origin: content-box;
  
  display: flex;
  align-items: center;

  @media(max-width: 576px) {
    justify-content: center;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 42px;
`;

const HeaderInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  border: 1px solid rgba(0, 0, 0, 0.4);

  border-radius: 40px;
`;

const HeaderText = styled.h1`
  font-family: Heebo;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;

  strong {
    font-weight: 500;
  }

  @media(max-width: 576px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 42px 6%;

  @media(max-width: 576px) {
    padding: 42px auto;
    margin: 0 auto;
  }
`;

const BooksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

`;

const Book = styled.div`
  width: 272px;
  height: 160px;
  padding: 19px 16px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  @media(max-width: 576px) {
    width: 100%;
  }
`;

const BookContent = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 81px;
    height: 122px;

    object-fit: cover;
  }
`;

const BookInfo = styled.div`
  margin-left: 21px;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  div {
    display: flex;
    flex-direction: column;
    height: auto;
  }

`;

const BookAuthor = styled.span`
  font-family: Heebo;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;

  color: #AB2680;
`;

const BookTitle = styled.h1`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;

  color: #333333;
`;

const BookData = styled.span`
  font-family: Heebo;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;

  color: #999999;
`;

const Footer = styled.div`
  height: 32px;
  margin: 30px 0 30px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

`;

const FooterButtons = styled.div`
  display: flex;

`;

export {
  Container,
  Content,
  Header,
  HeaderText,
  Logout,
  HeaderInfos,
  BooksContainer,
  Book,
  BookContent,
  BookInfo,
  Footer,
  FooterButtons,
  BookTitle,
  BookAuthor,
  BookData
};
