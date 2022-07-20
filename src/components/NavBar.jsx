import React from "react";

function NavBar({ darkTheme, toggleTheme }) {
  const getClasses = () => {
    let classes = "p-8 flex justify-between ";
    classes += darkTheme ? "bg-white text-black" : "bg-black text-white";
    return classes;
  };

  return (
    <div className={getClasses()}>
      <h1>
        <strong>Where in the world?</strong>
      </h1>
      <button className="px-4" onClick={toggleTheme}>
        <h5>
          <strong>Dark Mode</strong>
        </h5>
      </button>
    </div>
  );
}

export default NavBar;
