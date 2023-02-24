import React, { Fragment } from 'react';

import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';

function App() {
  return (
     
    <Router>

      <Fragment>
    
        <div  className='App' style={{backgroundColor:'#10212f'}}>

      <NavBar/>



          <div style={{ display:'flex',  
    flexDirection:'column', 
    justifyContent:'center', 
    padding:20}}>

            <Routes>

              <Route path='/' exact={true} element={<Landing/>}/>
        

            </Routes>

          </div>

        </div>

        <Footer/>

     
      </Fragment>
      
    </Router>

  );
}

export default App;
