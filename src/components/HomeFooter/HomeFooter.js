import {
  Footer, FooterButtons,
} from './style';
import { NextButton } from '../../components/HomeButtons/NextButton';
import { BackButton } from '../../components/HomeButtons/BackButton';

export function HomeFooter({ totalPages, pageNumber, isFirstPage, backDisabled, isLastPage, nextDisabled, handleChangePage }) {
  return (
    <Footer >
      {totalPages && pageNumber ?
        <h1>Página <strong>{pageNumber}</strong> de <strong>{totalPages}</strong></h1> : ''
      }
      <FooterButtons >
        <BackButton
          name='back'
          isFirstPage={isFirstPage}
          onClick={(e) => handleChangePage(e, pageNumber - 1)}
          disabled={backDisabled} />
        <NextButton
          name='next'
          isLastPage={isLastPage}
          onClick={(e) => handleChangePage(e, pageNumber + 1)}
          disabled={nextDisabled} />
      </FooterButtons>
    </Footer>
  );
};
