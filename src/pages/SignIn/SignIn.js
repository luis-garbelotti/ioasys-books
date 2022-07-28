import { Container, Content } from './style';
import { WhiteLogo } from '../../assets/components/Logo/WhiteLogo';
import Input from '../../assets/components/FormComponent/Input';
import { Box } from '@mui/material';

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
              value={''}
              type='noButton'
            />

            <Input
              label='password'
              placeholder='Senha'
              name='password'
              value={''}
              type='withButton'
            />
          </Box>
        </Box>
      </Content>
    </Container>
  );
}
