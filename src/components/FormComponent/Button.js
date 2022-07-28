import { useState } from 'react';
import useForm from '../../hooks/useForm';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Box } from '@mui/system';

import PropTypes from 'prop-types';

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

export default function SignInButton({ handleSubmit }) {
  const { form, onSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleTooltipClose = () => {
    setOpen(false);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const response = onSubmit(setIsLoading);

    if (response.message === 'Email e/ou senha incorretos.') {
      setOpen(true);
      setMessage(response.message);
    }
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
          sx: {
            '& .MuiTooltip-tooltip': {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              width: '260px',
              height: '48px',
              display: 'flex',
              left: '-75px',
              alignItems: 'center',
              marginTop: '20px',
              fontWeight: 700,
              fontSize: '16px'
            },
            '& .MuiTooltip-arrow': {
              left: '-60px !important',
              color: 'rgba(255, 255, 255, 0.4)'
            },
          }
        }}
        onClose={handleTooltipClose}
        open={true}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={message}
        arrow
      >
        <Stack spacing={2} direction="row">
          <Box component='div' sx={{ height: '60px', display: 'flex', alignItems: 'center' }}>

            <ColorButton
              loading={isLoading}
              variant="contained"
              onClick={handleOnSubmit}
            >
              Entrar
            </ColorButton>
          </Box>
        </Stack>
      </Tooltip>
    </ClickAwayListener >
  );
}

SignInButton.propTypes = {
  handleSubmit: PropTypes.any
};
