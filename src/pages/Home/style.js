import styled from 'styled-components';
import img from '../../assets/images/homeBg.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;

  strong {
    font-weight: 500;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 3% 8.4%;

  background-color: '#fff';
  
  @media(max-width: 576px) {
    width: 288px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
  }
`;

const BooksContent = styled.div`

`;

export {
  Container,
  Content,
  Header,
  HeaderText,
  Logout,
  HeaderInfos,
  BooksContent,
};
