import { Header } from './components/header';
import { Footer } from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './route';

import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
};