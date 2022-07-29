import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [tokens, setTokens] = useState({});

  async function onSubmit(setOpen, setIsLoading, setMessage) {
    try {
      const promise = await api.signIn(form);

      return promise;
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setOpen(true);
        setMessage('Email e/ou senha incorretos.');
        setIsLoading(false);
        return;
      }

      if (error.response.status === 500) {
        setOpen(true);
        setMessage('Infelizmente, algo deu errado.');
        setIsLoading(false);
        return;
      }
    }
  }

  function SetForm(formData) {
    setForm(formData);
  }

  return (
    <FormContext.Provider value={{ form, setForm, SetForm, onSubmit, tokens, setTokens }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.any
};

export default FormContext;
