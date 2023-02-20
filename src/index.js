import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseReducer } from './context/Firebase';
import  { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
     <FirebaseReducer>
     <React.StrictMode>
        <App />
     </React.StrictMode>
     </FirebaseReducer>
  </BrowserRouter>
);


