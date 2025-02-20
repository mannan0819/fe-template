import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { UserProvider } from './auth/UserProvider';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </UserProvider>
  </React.StrictMode>,
);
