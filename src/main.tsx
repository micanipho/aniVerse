import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/reset.css'
import { AnimeProvider } from './providers/animeProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </HashRouter>
  </React.StrictMode>,
);
