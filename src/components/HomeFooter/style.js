import styled from 'styled-components';

const Footer = styled.div`
  height: 32px;
  margin: 30px 0 30px 0;
  gap: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  
  color: #333333;

  strong {
    font-weight: 500;
  }

  @media(max-width: 576px) {
    justify-content: center;
    
    h1 {
      position: absolute;
      z-index: 1;
    }
  }
`;

const FooterButtons = styled.div`
  display: flex;

  @media(max-width: 576px) {
      width: 200px;

      z-index: 1;
      justify-content: space-between;
      
      position: absolute;
      button {
        margin: 0;
      }
  }
`;

export {
  Footer,
  FooterButtons,
};
