import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function onSubmit(setIsLoading) {
    if (!form.email || !form.password) {
      setIsLoading(false);
      return { message: 'Preencha todos os campos.' };
    }
    setIsLoading(false);
    alert('deu');
  }

  function SetForm(formData) {
    setForm(formData);
  }

  return (
    <FormContext.Provider value={{ form, setForm, SetForm, onSubmit }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.any
};

export default FormContext;
