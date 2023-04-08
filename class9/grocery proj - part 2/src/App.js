import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/products/:catId' element={ <ProductPage /> } />
      <Route path='/register' element={ <RegisterPage /> } />
      <Route path='/login' element={ <LoginPage /> } />
      <Route path='/about' element={ <AboutPage /> } />
      <Route path='/contact' element={ <ContactPage /> } />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
