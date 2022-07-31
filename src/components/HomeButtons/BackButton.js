import { MdOutlineNavigateBefore } from 'react-icons/md';
import { ButtonContainer } from './style';

export function BackButton({ isFirstPage, onClick, disabled }) {
  return (
    <ButtonContainer data-testid='back' onClick={onClick} disabled={disabled}>
      <MdOutlineNavigateBefore
        size={20}
        color={isFirstPage ? 'rgba(0, 0, 0, 0.4)' : '#333333'} />
    </ButtonContainer>
  );
};
