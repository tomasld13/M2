import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" placeholder="Search City"></input>
    <button onClick = {()=>props.onSearch("San Miguel")}>Agregar</button>
  </div>
};