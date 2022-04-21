import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-light bg-light">
      <img src={Logo}></img>
      <a class="navbar-brand">Henry Clima</a>
      <SearchBar onSearch = {onSearch}/>
    </nav>
    
    
  );
};

export default Nav;
