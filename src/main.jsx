import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Web3ModalProvider } from './web3ModalConfig'; // Import the provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </React.StrictMode>
);