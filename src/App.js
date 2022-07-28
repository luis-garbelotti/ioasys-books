import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn/SignIn';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
