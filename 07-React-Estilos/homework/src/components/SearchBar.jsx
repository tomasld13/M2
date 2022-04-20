import React from 'react';
//importo estilos
import s from './search.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return ( 
    <div>
      <input type="text" placeholder="city..." className = {s.search}/>
      <button onClick={props.onSearch} className = {s.boton}>Search</button>
    </div>
    )
};