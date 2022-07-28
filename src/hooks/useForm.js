import { useContext } from 'react';
import FormContext from '../contexts/FormContext';

export default function useAuth() {
  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error('useForm must be used inside a FormContext Provider');
  }

  return formContext;
}
