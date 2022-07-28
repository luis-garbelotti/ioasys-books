import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function SetForm(formData) {
    setForm(formData);
  }

  return (
    <FormContext.Provider value={{ form, setForm, SetForm }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.any
};

export default FormContext;
