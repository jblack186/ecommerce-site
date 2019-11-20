import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeImages from './components/HomeImages';
import Footer from './components/Footer';
import CategoryOne from './components/CategoryOne';

function App() {
  return (
    <div className="App">
     <Route exact path='/' render= {(props) => { return <HomeImages  {...props} />}} />
     <Route exact path='/categoryone' render= {(props) => { return <CategoryOne {...props} />}} />
    </div>
  );
}

export default App;
