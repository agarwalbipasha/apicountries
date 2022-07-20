import React, { useState, useEffect } from "react";

function Dropdown({ setSelectedItem, regions, darkTheme }) {
  return (
    <div
      className={
        darkTheme
          ? "bg-white text-black border-black"
          : "bg-black text-white border-white"
      }
    >
      <select
        className={
          darkTheme
            ? "bg-white text-black border-black"
            : "bg-black text-white border-white"
        }
        onChange={(event) => setSelectedItem(event.target.value)}
      >
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
