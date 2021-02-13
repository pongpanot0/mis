import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './Componets/Home';
import Slider from './Componets/Slider';
import En from './Componets/En';
import Ac from './Componets/Ac';
import Ac2 from './Componets/Ac2';
import product from './Componets/product';
import Uploadfrom from './Componets/Uploadfrom'
import ImageGrid from './Componets/ImageGrid';
import { Modal } from 'reactstrap';
import Addproduct from './Componets/Addproduct';
import Editproduct from './Componets/Editproduct';
import Showproduct from './Componets/Showproduct';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [selectedImg, setSelectedImg] = useState(null);  
  return (
    <div >   
      <Header/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/En" component={En}/>
      <Route path="/Ac" component={Ac}/>
      <Route path="/Ac2" component={Ac2}/>
      <Route path="/product" component={product}/>
      <Route path="/Uploadfrom" component={Uploadfrom}/>
      <Uploadfrom/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      <Modal selectedImg={selectedImg}/>
      <Route path="/create" component={Addproduct}/>
      <Route path="/show/:id" component={Showproduct}/>
      <Route path="/edit/:id" component={Editproduct}/>
     <Footer/>
    </div>
  );
}

export default App;
