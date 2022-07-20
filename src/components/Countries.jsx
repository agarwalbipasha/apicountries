import React, { useState } from "react";
import "../css/main.css";
import Modal from "./Modal";

const Countries = ({
  countries,
  searchTerm,
  selectedItem,
  regions,
  toggleModal,
  modal,
  modalCountry,
  setModalCountry,
  darkTheme,
  toggleTheme,
}) => {
  let countriesName = countries;
  let countryCCA = [];

  if (countriesName.length > 0) {
    for (let index = 0; index < countriesName.length; index++) {
      let key = countriesName[index]["cca3"];
      let value = countriesName[index]["name"]["common"];
      let obj = {};
      obj[key] = value;
      countryCCA.push(obj);
    }
  }

  if (searchTerm.length > 0) {
    countriesName = countriesName.filter((country) =>
      country["name"]["common"].toLowerCase().includes(searchTerm)
    );
  }
  if (regions.includes(selectedItem)) {
    countriesName = countriesName.filter(
      (country) => country["region"] == selectedItem
    );
  }

  function getCountryObject(name) {
    let data = countriesName;
    let countryObject = data.filter(
      (country) => country["name"]["common"] == name
    );
    return countryObject;
  }

  const getClasses = () => {
    let classes = "flex flex-row gap-4 flex-wrap ";
    classes += darkTheme ? "bg-white text-black" : "bg-black text-white";
    return classes;
  };

  return (
    <React.Fragment>
      <section className={getClasses()}>
        {countriesName.length > 0
          ? countriesName.map((country, index) => {
              return (
                <div
                  data-name="hello"
                  className="border w-1/5"
                  onClick={() => {
                    setModalCountry(country);
                    toggleModal();
                  }}
                >
                  <div className="h-24">
                    <img src={country["flags"]["svg"]} />
                  </div>
                  <div>
                    <h5>{country["name"]["common"]}</h5>
                    <p>
                      <strong>Population: </strong>
                      {country["population"]}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {country["region"]}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {country["capital"]}
                    </p>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </section>
      <section>
        {modal && (
          <Modal
            modalCountry={modalCountry}
            countryCCA={countryCCA}
            setModalCountry={setModalCountry}
            getCountryObject={getCountryObject}
            toggleModal={toggleModal}
            darkTheme={darkTheme}
            toggleTheme={toggleTheme}
          />
        )}
      </section>
    </React.Fragment>
  );
};

export default Countries;
