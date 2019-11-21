import React, {useState, useEffect} from 'react';
import './CategoryOne.css';
import NavBar from './NavBar';
import axios from 'axios';

const CategoryOne = () => {
    
    useEffect(() => {
        axios.get("https://shirt-store123.herokuapp.com/api/inventory")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })



    return (
        <div>
            <NavBar />

        </div>
    )
}

export default CategoryOne;