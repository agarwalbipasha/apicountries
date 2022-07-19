import React, { useState, useEffect } from "react";

function Dropdown({ countries, selectedItem, setSelectedItem, regions }) {
  

  return (
    <div>
      <select onChange={(event) => setSelectedItem(event.target.value)}>
        <option>Filter by Region...</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
