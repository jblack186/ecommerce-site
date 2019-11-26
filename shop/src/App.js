import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeImages from './components/HomeImages';
import Footer from './components/Footer';
import CategoryOne from './components/CategoryOne';
import ProductPage from './components/ProductPage';
import axios from 'axios';

const App = () => {
  const [polos, setPolos] = useState([])
    useEffect(() => {
        axios.get("https://shirt-store123.herokuapp.com/api/inventory")
            .then(res => {
                setPolos(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div className="App">
     <Route exact path='/' render= {(props) => { return <HomeImages  {...props} />}} />
     <Route exact path='/categoryone' render= {(props) => { return <CategoryOne {...props} polo={polos} />}} />
     <Route exact path='/productpage/:id' render= {(props) => { return <ProductPage  {...props} polo={polos} />}} />

    </div>
  );
}

export default App;
