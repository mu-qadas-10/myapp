import logo from './logo.svg'
import './App.css';

import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Fakeapi from './Components/Fakeapi';

import Detailpage from './Components/Detailpage';
import Detail from './Components/Detail';
import Login from './Components/Login';
import Protectedroute from './Components/Protectedroute';
import { useState } from 'react';
import Online from './Components/Online';
import Search from './Components/Search';
import Register from './Components/Register';
import ReactImageMagnify from 'react-image-magnify';
import   ShoppingCart  from './Components/Shoppingcart';


function App() {
  const resultImageURL ='./result.image';
  const [{isloged, setIsloged}]=useState(false);

  return(
    <div className="App">
      <div id="imageMagnifyer">
      <ReactImageMagnify {...{
    smallImage: {
        alt: '',
        isFluidWidth: true,
        src: resultImageURL.image
    },
    largeImage: {
        src: resultImageURL.image,
        width: 800,
        height: 1100
    }
}} />
      </div>
    <Navbar setIsloged={setIsloged}/>
   <Routes>
   <Route element={<Protectedroute isloged={isloged}/>} >
   < Route path='/' element={<Home/>}></Route>
    < Route path='/about' element={<About/>}></Route>
    <Route path='/about/:id' element={<Detail/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/online' element={<Online/>}></Route>
    <Route path='/product/:id' element={<Detailpage/>}></Route>
    <Route path='/fakeapi' element={<Fakeapi/>}></Route>
    <Route path='/search' element={<Search/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/shoppingcart' element={<ShoppingCart/>}></Route>
   </Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
    </div>
  )
};
export default App;



// React separate library and redux sepaprate library
// Ques: What is Redux?
// Redux is a state managment library which is used to manage the state of web application. Redux can't relation in redux

// useDispatch snd in store slice




