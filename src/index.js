import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebase } from './lib/firebase';
import { FirebaseContext } from './context';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
