import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';

function NavBar() {
  return (
    <div>
      <nav>
      <Link to='/' className='nav-item nav-logo'>
        <img src={logo} alt='logo'></img>
      </Link>
      <Link to='/' className='nav-item nav-link'>about</Link>
      <Link to='/' className='nav-item nav-link'>products</Link>
      <Link to='/' className='nav-item nav-link'>For Teams</Link>
      <form>
        <input type='text' placeholder='search'></input>
        <img src={search} alt='search logo' width='18' className='search-icon'></img>
      </form>
      
      </nav>
    </div>
  )
}

export default NavBar
