import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalCountry, setModalCountry] = useState("");

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

  useEffect(() => {
    fetchCountryData();
  }, []);
  // console.log(JSON.stringify(modalCountry));

  return (
    <React.Fragment>
      <Search
        countries={countries}
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        regions={regions}
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
      />
    </React.Fragment>
  );
}

export default App;
