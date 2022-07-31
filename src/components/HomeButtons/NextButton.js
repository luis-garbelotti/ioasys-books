import { MdOutlineNavigateNext } from 'react-icons/md';
import { ButtonContainer } from './style';

export function NextButton({ isLastPage, onClick, disabled }) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      <MdOutlineNavigateNext
        size={20}
        color={isLastPage ? 'rgba(0, 0, 0, 0.4)' : '#333333'} />
    </ButtonContainer>
  );
};
