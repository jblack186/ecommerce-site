import React from 'react';
import {Link} from 'react-router-dom';
import './CategoryOne.css';

export default function SideBar(props) {
    return (
        <div>
          <div className='side-bar'>
                  <ul>
                    <li onClick={props.filter}>Polo</li>
                    <li onClick={props.filter}>Dress</li>
                    <li onClick={props.filter}>Casual</li>
                    <li onClick={props.filter}>Flannel</li>
                  </ul>
                </div>

        </div>
    )
}