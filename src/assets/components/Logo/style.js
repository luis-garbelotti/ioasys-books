import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 16.6px;

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

const DarkLogo = styled.img`
  filter: invert();
`;

export {
  Container,
  DarkLogo
};
