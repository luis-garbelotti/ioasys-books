import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import useForm from '../../hooks/useForm';

const ColorButton = styled(LoadingButton)(() => ({
  width: '85px',
  height: '36px',
  borderRadius: '44px',

  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'none',

  color: '#B22E6F',
  backgroundColor: '#fff',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
}));

export default function SignInButton() {
  const { form } = useForm();

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        loading={false}
        variant="contained"
        onClick={onSubmit}
      >
        Entrar
      </ColorButton>
    </Stack>
  );
}
