import { Button } from 'bootstrap';
import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
      <button onClick = {props.onClose}> X </button>
      <h3>{props.name}</h3>
    </div>
    <div>
      <h4> Max </h4>
      <p>{props.max}</p>
    </div>
    <div>
      <h4> Min </h4>
      <p>{props.min}</p>
    </div>
  </div>
};