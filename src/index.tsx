import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { createCtx } from './context/mnemonicContext';

const [ctx, MnemonicProvider] = createCtx([])

export const MnemonicContext = ctx;

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  
root.render(
  <React.StrictMode>
    <MnemonicProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MnemonicProvider>
  </React.StrictMode>
);



