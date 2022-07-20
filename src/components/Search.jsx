import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Search({
  countries,
  onChange,
  selectedItem,
  setSelectedItem,
  regions,
  darkTheme,
}) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  const getClasses = () => {
    let classes = "flex flex-row justify-between p-10 p-x-16 ";
    classes += darkTheme ? "bg-white text-black" : "bg-black text-white";
    return classes;
  };

  return (
    <div className={getClasses()}>
      <input
        className={
          darkTheme
            ? "bg-white text-black border-black"
            : "bg-black text-white border-white"
        }
        type="text"
        placeholder="Search for a country"
        onChange={handleChange}
      ></input>
      <Dropdown
        countries={countries}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        regions={regions}
        darkTheme={darkTheme}
      />
    </div>
  );
}

export default Search;
