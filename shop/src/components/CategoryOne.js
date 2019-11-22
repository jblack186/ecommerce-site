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

console.log(polos)

    return (
        <div>
            <NavBar />
            <div>
                {polos.leng}
            </div>

        </div>
    )
}

export default CategoryOne;