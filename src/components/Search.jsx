import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Search({ countries, searchTerm, onChange, selectedItem, setSelectedItem, regions }) {
  
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="flex flex-row justify-between p-10 p-x-16">
      <input type="text" placeholder="Search for a country" onChange={handleChange}></input>
      <Dropdown countries={countries} selectedItem={selectedItem} setSelectedItem={setSelectedItem} regions={regions}/>
    </div>
  );
}

export default Search;


