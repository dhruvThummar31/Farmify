import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App.jsx';
import Header from './component/Header.jsx';
import {AppProvider} from '../src/services/AppContext.jsx'
import {AuthProvider} from '../src/services/AuthContext.jsx'
import Footer from '../src/component/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AppProvider>
      <AuthProvider>
        <Header />
        <div className='app-container'>
          <App />
        </div>
       <Footer/>
        </AuthProvider>
     </AppProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
);