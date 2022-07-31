import {
  Header, HeaderInfos, HeaderText,
  Logout
} from './style';
import { BlackLogo } from '../../components/Logo/BlackLogo';
import { FiLogOut } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function HomeHeader({ name }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <Header>
      <BlackLogo />
      <HeaderInfos>
        <HeaderText>
          {name ?
            <span>Bem vindo, <strong>{name}!</strong></span>
            :
            ''
          }
        </HeaderText>
        <Logout onClick={handleLogout}>
          <FiLogOut />
        </Logout>
      </HeaderInfos>
    </Header>
  );
}
