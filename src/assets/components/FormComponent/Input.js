/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SignInButton from './Button';

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(() => ({
  '& .MuiFilledInput-root': {
    width: '100%',
    height: '60px',
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.32)',
    },

    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 0, 0, 0.32)',
      color: 'transparent',
    },
  },
}));

export default function Input({ label, placeholder, name, value, onChange, type }) {
  return (
    type === 'noButton' ?
      <RedditTextField
        label={placeholder}
        variant="filled"
        value={value}
        type={label}
        name={name}
        InputLabelProps={{
          style: {
            color: '#FFFFFF'
          },
        }}
        InputProps={{ disableUnderline: true }}
      />
      :
      <RedditTextField
        label={placeholder}
        variant="filled"
        value={value}
        type={label}
        name={name}
        InputLabelProps={{
          style: {
            color: '#FFFFFF'
          },
        }}
        InputProps={{ endAdornment: <SignInButton />, disableUnderline: true }}
      />
  );
}
