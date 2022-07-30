import { MdOutlineNavigateBefore } from 'react-icons/md';
import { Container } from './style';

export function BackButton({ isFirstPage, onClick, disabled }) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      <MdOutlineNavigateBefore
        size={20}
        color={isFirstPage ? 'rgba(0, 0, 0, 0.4)' : '#333333'} />
    </Container>
  );
};
