import React from 'react';
import {useParams} from 'react-router';


const ProductPage = (props) => {
    const {id} = useParams();

console.log(props)
    return (
        <div>
            <div> item {id}</div>

        </div>
    )
}

export default ProductPage;