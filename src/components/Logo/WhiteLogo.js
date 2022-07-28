import logo from '../../assets/images/Logo.png';
import { Container } from './style';

export function WhiteLogo() {
  return (
    <Container>
      <img src={logo} alt='ioasys-logo' />
      <div>
        <h1>Books</h1>
      </div>
    </Container>
  );
}
