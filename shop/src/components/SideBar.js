import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './CategoryOne.css';

const SideBar = (props) => {
  const [polo, setPolo] = useState(true)
  const [dress, setDress] = useState(false)
  const [casual, setCasual] = useState(false)
  const [flanell, setFlannel] = useState(false)

console.log(polo)
const poloC = e => {
  props.filter(e)
    e.preventDefault();
    setPolo(!polo)
    setCasual(false)
    setFlannel(false)
    setDress(false)
    console.log(e)
}

const dressC = e => {
  props.filter(e)

  e.preventDefault();
  setDress(!dress)
  setCasual(false)
  setFlannel(false)
  setPolo(false)

}

const casualC = e => {
    props.filter(e)
  e.preventDefault();
  setCasual(!casual)
  setFlannel(false)
  setPolo(false)
  setDress(false)

}

const flanellC = e => {
  props.filter(e)
  e.preventDefault();
  setFlannel(!flanell)
  setCasual(false)
  setPolo(false)
  setDress(false)

}


    return (
        <section className='side-bar-container'>
          <div className='side-bar'>
            <h2 className='style-tag'>Choose Style</h2>
                  <ul className='side-bar-list'>
                    <li onClick={poloC} className={polo === true ? 'side-li active' : null }  >Polo</li>
                    <li onClick={dressC} className={dress === true ? 'side-li active' : null }>Dress</li>
                    <li onClick={casualC} className={casual === true ? 'side-li active' : null }>Casual</li>
                    <li onClick={flanellC} className={flanell === true ? 'side-li active' : null }>Flannel</li>
                  </ul>
                </div>

        </section>
    )
}

export default SideBar;