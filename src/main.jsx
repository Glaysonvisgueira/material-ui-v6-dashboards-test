import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

//Material UI reset CSS component
import CssBaseline from '@mui/material/CssBaseline';


import Layout from './components/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CssBaseline />
      <Layout>
        <App />
      </Layout>
  </StrictMode>,
)
