import { MdOutlineNavigateNext } from 'react-icons/md';
import { Container } from './style';

export function NextButton({ isLastPage }) {
  console.log(isLastPage);
  return (
    <Container>
      <MdOutlineNavigateNext size={20} color={isLastPage ? 'rgba(0, 0, 0, 0.4)' : '#333333'} />
    </Container>
  );
};
