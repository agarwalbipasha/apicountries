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
}) => {
  const [newModal, setNewModal] = useState("");

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

  if (newModal != "") {
    console.log(newModal)
    let newModalCountryName = countriesName.filter((country) => {
      console.log(country["name"]["nativeName"])
      let nativeNameKey = Object.keys(country["name"]["nativeName"]);
      // console.log(nativeNameKey)
      if (
        country["name"]["nativeName"][
          `${nativeNameKey[nativeNameKey.length - 1]}`
        ]["common"] == newModal
      ) {
        // console.log(country)
        return country;
      }
    });

    console.log(newModalCountryName);
    // setModalCountry(newModalCountryName)
  }

  return (
    <React.Fragment>
      <section className="flex flex-row gap-4 flex-wrap">
        {countriesName.length > 0
          ? countriesName.map((country, index) => {
              return (
                <div
                  data-name="hello"
                  className="border w-1/5"
                  onClick={() => {
                    setModalCountry(country);
                    toggleModal();
                    console.log(modalCountry);
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
            // setNewModal={setNewModal}
          />
        )}
      </section>
    </React.Fragment>
  );
};

export default Countries;
