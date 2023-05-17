import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Home/>
    {/* <Main />
    <Footer/> */}
    </div>
  );
}

export default App;
