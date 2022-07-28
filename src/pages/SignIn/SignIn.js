import { Container, Content } from './style';
import { WhiteLogo } from '../../components/Logo/WhiteLogo';
import Input from '../../components/FormComponent/Input';
import { Box } from '@mui/material';
import { useState } from 'react';
import useForm from '../../hooks/useForm';

const styles = {
  container: {
    width: '100%',
    minWidth: '288px',
    height: '136px',
    marginTop: '50px',
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
};

export function SignIn() {
  const { setForm, form } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container >
      <Content >
        <WhiteLogo />
        <Box component='div' style={styles.container}>
          <Box component='form' style={styles.form}>
            <Input
              label='email'
              placeholder='Email'
              name='email'
              value={form.email}
              type='noButton'
              onChange={handleInputChange}
            />

            <Input
              label='password'
              placeholder='Senha'
              name='password'
              value={form.password}
              type='withButton'
              onChange={handleInputChange}
            />
          </Box>
        </Box>
      </Content>
    </Container>
  );
}
