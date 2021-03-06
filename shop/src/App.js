import React, {useState, useEffect} from 'react';
import '@ionic/react/css/core.css';
import './App.css';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import HomeImages from './components/HomeImages';
import CategoryOne from './components/CategoryOne';
import ProductPage from './components/ProductPage';
import Basket2 from './components/Basket2';
import Login from './components/Login';
import axios from 'axios';
import Features from './components/Features';
import Collage from './components/Collage';

const App = () => {
  const [polos, setPolos] = useState([])
  const [carts, setCarts] = useState([])
  const [storeStuff, setStoreStuff] = useState([])
 const [usernameLog, setUsernameLog] = useState([])
 const [passwordLog, setPasswordLog] = useState()
 const history = useHistory();
  const [carBasket, setCarBasket] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  const [polosShirts, setPolosShirts] = useState();
  const [count, setCount] = useState(0)


const filter = e => {
  const target = e.target.innerHTML

  const polo =polos.filter(item => {
   return item.type === target.toLowerCase()
  })
  setPolosShirts(polo)
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });}


    useEffect(() => {
        axios.get("https://shirt-store123.herokuapp.com/api/dbInventory")
            .then(res => {
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
      axios.get("https://shirt-store123.herokuapp.com/api/inventory")
          .then(res => {
              setPolos(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])

  useEffect(() => {
    const prods = JSON.parse(localStorage.getItem("newProducts"))
}, [])
useEffect(() => {
  if (carts.length > 0) {
  localStorage.setItem("store", JSON.stringify(carts))
}
}, [carts])



const changeUsernameLog = (e) => {
  e.preventDefault();
  setUsernameLog(e.target.value)

}

const changePasswordLog = (e) => {
  e.preventDefault();
  setPasswordLog(e.target.value)

}



const add = e => {
  e.preventDefault();
  setQuantity( quantity + 1 )
}

const minus = e => {
  e.preventDefault();
  if ( quantity > 0 ) {
  setQuantity( quantity - 1 )
  }

}

const login = (e) => {
  localStorage.removeItem('store')
  setCarts([])
  e.preventDefault();
  axios.post(`https://shirt-store123.herokuapp.com/api/login`, {'username': usernameLog, 'password': passwordLog})
  .then(response => {
      console.log(response)

  localStorage.setItem('token', response.data.accessToken)
  history.push('/')
})
  .catch(error => {
      console.log(error)
  })

}

useEffect(() => {
  const both = JSON.parse(localStorage.getItem("store"))
    if (both) {

   const newBoth = both.reduce((acc,item) => {
     return acc + item.quantity
   }, 0)
    setCount(newBoth)
  }
}, [carBasket] )




  function addToCart() {
    const price = [JSON.parse(localStorage.getItem("product"))]
    console.log('price', price)
    if (price) {
      price.map(item => {
        setTotal(item.price * quantity)
      })
    }
    if (storeStuff) {
    const store = JSON.parse(localStorage.getItem("store"));
    setStoreStuff(store)

    }
    setQuantity(1)
    const prod = [JSON.parse(localStorage.getItem("product"))]
    prod.map(item => {
      const cartStorage = JSON.parse(localStorage.getItem("store"))
      const newProd = [{item_name: item.item_name, price: item.price, quantity: quantity, description: item.description, img: item.img}]
      if (cartStorage) {
      setCarts([...cartStorage, newProd[0] ])
      } else {
        setCarts([...carts, newProd[0] ])

      }
      return localStorage.setItem("pros", JSON.stringify(newProd))

    })

    setCarBasket([...carBasket, prod && storeStuff])

 }


 const removeItem = (index) =>  {
  const store = JSON.parse(localStorage.getItem("store"))
  store.splice(index, 1)
  setCarBasket([...carBasket, store])
  localStorage.setItem("store", JSON.stringify(store))


}


  return (
    <div className="App">
      <Route exact path='/head' render= {(props) => { return <Header count={count} {...props} />}} />
      <Route exact path='/feat' render= {(props) => { return <Features  {...props} />}} />
      <Route exact path='/collage' render= {(props) => { return <Collage  {...props} />}} />
      <Route exact path='/login' render= {(props) => { return <Login  {...props} login={login} username={usernameLog} password={passwordLog} changeUsername={changeUsernameLog} changePassword={changePasswordLog} />}} />
      <Route exact path='/Basket2' render= {(props) => { return <Basket2 removeItem={removeItem} count={count} basket={carBasket} total={total} />}} />
      <Route exact path='/' render= {(props) => { return <HomeImages  {...props} />}} />
      <Route exact path='/categoryone/' render= {(props) => { return <CategoryOne count={count} {...props} filter={filter} polo={polosShirts ? polosShirts : polos} poloCart={polos} />}} />
      <Route exact path='/productpage/:id' render= {(props) => { return <ProductPage count={count} {...props}  total={total} add={add} minus={minus} quantity={quantity} polo={polos}  addToCart={addToCart} />}} />
    </div>
  );
}
export default App;
