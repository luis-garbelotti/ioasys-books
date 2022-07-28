import styled from 'styled-components';
import img from '../../assets/images/bgSignIn.png';

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

const Content = styled.div`
  margin-left: 115px;
  width: 100%;
  max-width: 368px;
  
  background-color: '#fff';
  
  @media(max-width: 576px) {
    width: 288px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
  }
`;

export {
  Container,
  Content,
};
