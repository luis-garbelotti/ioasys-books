import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;

  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;

  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;

  background-color: rgba(51, 51, 51,0.4);
  backdrop-filter: blur(1px);
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
  margin-bottom: 32px;
  
  display: flex;
  justify-content: flex-end;

`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;

  background-color: #fff;

  border-radius: 30px;
  border: 1px solid rgba(51, 51, 51, 0.2);
`;

const Content = styled.div`
  width: 769px;
  height: 608px;
  padding: 48px;

  display: flex;
  justify-content: space-between;

  border-radius: 4px;

  background-color: #fff;
`;

const BookImage = styled.img`
  width: 349px;
  height: 100%;
`;

const BookData = styled.div`
  width: 276px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const BookTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

const BookAuthors = styled.div`
  h3{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    color: #AB2680;
  }
`;

const BookInfoHeader = styled.h2`
  font-size: 12px;
  font-weight: 500;
  line-height: 28.5px;
  letter-spacing: 0em;
  text-align: left;

  margin: 20px 0 12px 0;
`;

const BookInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  
  h2 {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    color: #333333;
  }
  
  span {
    font-family: Heebo;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: right;
    
    color: #999999;
  }
`;

const BookDescription = styled.div`
  width: 320px;
  padding: 5px 40px 5px 0;
  
  display: flex;
  
  position: relative;
  overflow: auto;
  
  p{
    height: 100%;

    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    color: #999999;
  }

  img {
    width: 17px;
    height: 14px;

    z-index: 15;
    top: 8px;
    left: 0;

    position: absolute;
  }
`;

export {
  Container,
  CloseButton,
  Header,
  Content,
  BookImage,
  BookData,
  BookTitle,
  BookAuthors,
  BookInfoHeader,
  BookInfoContent,
  BookDescription,
};
