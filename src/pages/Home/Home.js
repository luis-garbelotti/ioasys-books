import { BooksContent, Container, Content, Header, HeaderInfos, HeaderText, Logout } from './style';
import logo from '../../assets/images/Logo.png';
import { BlackLogo } from '../../components/Logo/BlackLogo';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export function Home() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('aaaaaaaaaa');
    if (!auth || !auth.token || auth === null) {
      navigate('/');
      return;
    }
    console.log('auth', auth);
  }, []);

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <>
      <Container>
        <Content>
          <Header>
            <BlackLogo />
            <HeaderInfos>
              <HeaderText>
                {auth?.name ?
                  <>
                    <h1>Bem vindo, <strong>{auth.name}!</strong></h1>
                  </>
                  :
                  ''
                }
              </HeaderText>
              <Logout onClick={handleLogout}>
                <FiLogOut />
              </Logout>
            </HeaderInfos>
          </Header>

          <BooksContent>

          </BooksContent>
        </Content>
      </Container>
    </>
  );
}
