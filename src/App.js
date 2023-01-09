
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';

import Footer from './Footer';
import Component from './Section1/Component';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Navbarr/>
        <Routes>
            <Route path='/' element={<Component/>} />
            

        </Routes>
        <Footer/>
   </BrowserRouter>
     
      
  
    </div>
  );
}

export default App;
