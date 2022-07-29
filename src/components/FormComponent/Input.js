/* eslint-disable react/prop-types */
import { useState } from 'react';

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
    color: '#fff',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.32)',
    },

    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 0, 0, 0.32)',
      '& label': {
        color: 'red',
      }
    },
  },
}));

const styles = {
  label: {
    color: '#FFFFFF',
    opacity: 0.5
  }
};

export default function Input({ label, placeholder, name, value, onChange, type }) {
  return (
    type === 'noButton' ?
      <RedditTextField
        label={placeholder}
        variant="filled"
        value={value}
        type={label}
        name={name}
        onChange={onChange}
        InputLabelProps={{
          style: styles.label,
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
        onChange={onChange}
        InputLabelProps={{
          style: styles.label,
        }}
        InputProps={{ endAdornment: <SignInButton />, disableUnderline: true }}
      />

  );
}
