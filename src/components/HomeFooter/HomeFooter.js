import {
  Footer, FooterButtons,
} from './style';
import { NextButton } from '../../components/HomeButtons/NextButton';
import { BackButton } from '../../components/HomeButtons/BackButton';

export function HomeFooter({ totalPages, pageNumber, isFirstPage, backDisabled, isLastPage, nextDisabled, handleChangePage }) {
  return (
    <Footer >
      {totalPages && pageNumber ?
        <h1>Página {pageNumber} de {totalPages}</h1> : ''
      }
      <FooterButtons >
        <BackButton
          isFirstPage={isFirstPage}
          onClick={(e) => handleChangePage(e, pageNumber - 1)}
          disabled={backDisabled} />
        <NextButton
          isLastPage={isLastPage}
          onClick={(e) => handleChangePage(e, pageNumber + 1)}
          disabled={nextDisabled} />
      </FooterButtons>
    </Footer>
  );
};
