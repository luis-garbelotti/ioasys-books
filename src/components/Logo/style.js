import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    height: 24px;
    
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 0em;
    text-align: left;

    color: #fff;
  }
`;

const DarkLogo = styled.div`
  gap: 16.6px;

  img {
    filter: invert();
  }

  h1 {
    height: 24px;
    
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 0em;
    text-align: left;

    color: #333333;
  }
`;

export {
  Container,
  DarkLogo
};
