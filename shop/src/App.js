import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeImages from './components/HomeImages';
import Footer from './components/Footer';
import CategoryOne from './components/CategoryOne';
import ProductPage from './components/ProductPage';
import Basket from './components/Basket';
import Basket2 from './components/Basket2';
import Register from './components/Register';
import Login from './components/Login';
import axios from 'axios';


const App = () => {
  const [polos, setPolos] = useState([])
  const [basket, setBasket] = useState([])

    useEffect(() => {
        axios.get("https://shirt-store123.herokuapp.com/api/inventory",{headers : {"Access-Control-Allow-Origin": 'http://localhost:3000'}})
            .then(res => {
                setPolos(res.data)
                // console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div className="App">
      <Route exact path='/register' render= {(props) => { return <Register  {...props} />}} />
      <Route exact path='/login' render= {(props) => { return <Login  {...props} />}} />
      {/* <Basket cartItems={Basket} /> */}
      <Route exact path='/Basket2' render= {(props) => { return <Basket2  {...props} />}} />
     <Route exact path='/' render= {(props) => { return <HomeImages  {...props} />}} />
     <Route exact path='/categoryone' render= {(props) => { return <CategoryOne {...props} polo={polos} />}} />
     <Route exact path='/productpage/:id' render= {(props) => { return <ProductPage  {...props} polo={polos} cartItems={basket} />}} />
    </div>
  );
}

export default App;
