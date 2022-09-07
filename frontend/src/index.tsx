import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './App';

import { design } from './styles/design';
import { GlobalStyle } from './styles/global';

import 'react-multi-carousel/lib/styles.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <ThemeProvider theme={design}>
      <App />

      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
