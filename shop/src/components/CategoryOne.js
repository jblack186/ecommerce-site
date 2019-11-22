import React, {useState, useEffect} from 'react';
import './CategoryOne.css';
import NavBar from './NavBar';
import axios from 'axios';

const CategoryOne = () => {
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

console.log(polos.img)

    return (
        <div>
            <NavBar />
            <div>
                {polos.map(item => { 
                    
                return <div> <img src={item.img} /> <p>{item.item_name}</p> <p>{item.price}</p> <p>{item.description} </p></div>
                    
                 
                  
                })}
                {/* {polos.map(item => {
                  return <p>{item.item_name}</p>
                  
                })} */}
                
            </div>

        </div>
    )
}

export default CategoryOne;