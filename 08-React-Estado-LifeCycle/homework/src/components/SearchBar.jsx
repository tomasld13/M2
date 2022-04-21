import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, cityState] = useState("");

  const cambioInput = (e) => {
    e.preventDefault()
    cityState(e.target.value)
  }
  

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=>cambioInput(e)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
