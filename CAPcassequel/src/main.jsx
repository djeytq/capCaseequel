import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './style/global';
import { Rotas } from './Routes';
import { Home } from './pages/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Rotas />
  </StrictMode>,
)
