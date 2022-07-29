import logo from '../../assets/images/Logo.png';
import { Container, DarkLogo } from './style';

export function BlackLogo() {
  return (
    <Container>
      <DarkLogo>
        <img src={logo} alt='ioasys-logo' />
        <div>
          <h1>Books</h1>
        </div>
      </DarkLogo>
    </Container>
  );
}
