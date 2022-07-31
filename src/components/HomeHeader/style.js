import styled from 'styled-components';

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

  border: 1px solid rgba(51, 51, 51, 0.2);

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

export {
  Header,
  HeaderInfos,
  HeaderText,
  Logout
};
