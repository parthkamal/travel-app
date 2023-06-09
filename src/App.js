import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Footer from './components/Footer';



const App = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <Home/>
    <Main />
    </React.Fragment>
  );
}

export default App;
