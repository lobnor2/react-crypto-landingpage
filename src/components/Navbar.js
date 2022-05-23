import React from 'react';
import './Navbar.css' ;
import { FaBars, FaTimes }  from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='header'>
        <div className="container">
             <h1>De<span className='primary'>Fi</span></h1>
             <ul className="nav-menu">
                 <li><a href="/">Home</a></li>
                 <li><a href="/">Featured</a></li>
                 <li><a href="/">Earn</a></li>
                 <li><a href="/">Contact</a></li>
             </ul>
             <div className="btn-group">
                 <button className="btn">Connect Wallet</button>
             </div>
             <div className="hamburger">
                 <FaBars size={30} style={{color:'#333'}}/>
             </div>
        </div>
    </div>
  )
}

export default Navbar