import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Addproduct from './Componets/Addproduct';
import Editproduct from './Componets/Editproduct';
import Showproduct from './Componets/Showproduct';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Route path="/create" component={Addproduct}/>
      <Route path="/show/:id" component={Showproduct}/>
      <Route path="/edit/:id" component={Editproduct}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();