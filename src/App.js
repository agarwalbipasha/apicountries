import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalCountry, setModalCountry] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const fetchCountryData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
    return countries;
  };

  const regions = Array.from(
    new Set(countries.map((country) => country.region))
  ).sort();

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <React.Fragment>
      <NavBar darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Search
        countries={countries}
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        regions={regions}
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
      />
      <Countries
        countries={countries}
        searchTerm={searchTerm}
        selectedItem={selectedItem}
        regions={regions}
        modal={modal}
        toggleModal={toggleModal}
        modalCountry={modalCountry}
        setModalCountry={setModalCountry}
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
      />
    </React.Fragment>
  );
}

export default App;
