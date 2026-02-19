import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/reset.css'
import { AnimeProvider } from './providers/animeProvider';
import { AuthProvider } from './providers/authProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <AnimeProvider>
          <App />
        </AnimeProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
);
