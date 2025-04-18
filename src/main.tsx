// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './global.css'
// import { BrowserRouter as Router } from 'react-router-dom'
// import AppRoutes from './AppRoutes'
// import i18n from './i18n'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router>
//       <AppRoutes />
//     </Router>
//   </React.StrictMode>,
// )


//=========================

// prueba de traduccion 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <AppRoutes />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);