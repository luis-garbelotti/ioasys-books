import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FormProvider } from './contexts/FormContext';
import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn/SignIn';

export default function App() {
  return (
    <AuthProvider>
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </AuthProvider>
  );
}
