import React from "react";
import NavBar from "./NavBar";

function Modal({
  modalCountry,
  countryCCA,
  setModalCountry,
  getCountryObject,
  toggleModal,
  darkTheme,
  toggleTheme,
}) {
  let nativeNameKey = Object.keys(modalCountry["name"]["nativeName"]);
  let currencyNameKey = Object.keys(modalCountry["currencies"]);
  let languagesList = Object.values(modalCountry["languages"]);
  let borderCountries = modalCountry["borders"];
  let fullName = [];
  let data = countryCCA;

  if (borderCountries != undefined) {
    fullName = data.filter((e) => {
      if (borderCountries.includes(`${Object.keys(e)}`)) {
        return Object.values(e);
      }
    });

    fullName = fullName
      .map((name) => Object.values(name))
      .flat()
      .sort();
  }

  const getClasses = () => {
    let classes = "flex justify-center items-center ";
    classes += darkTheme ? "bg-white text-black" : "bg-black text-white";
    return classes;
  };

  return (
    <div className="fixed inset-0 bg-white ">
      <NavBar toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <div className={getClasses()}>
        <div>
          <button className="p-8 border-black" onClick={toggleModal}>
            Back
          </button>
          <img src={modalCountry["flags"]["svg"]} />
        </div>
        <div>
          <h2>
            <strong>{modalCountry["name"]["common"]}</strong>
          </h2>
          <div className="flex">
            <div>
              <p>
                <strong>Native name:</strong>{" "}
                {
                  modalCountry["name"]["nativeName"][
                    `${nativeNameKey[nativeNameKey.length - 1]}`
                  ]["common"]
                }
              </p>
              <p>
                <strong>Population: </strong>
                {modalCountry["population"]}
              </p>
              <p>
                <strong>Region: </strong>
                {modalCountry["region"]}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {modalCountry["subregion"]}
              </p>
              <p>
                <strong>Capital: </strong>
                {modalCountry["capital"]}
              </p>
            </div>
            <div>
              <p>
                <strong>Tol Level Domain: </strong>
                {modalCountry["tld"]}
              </p>
              <p>
                <strong>Currencies: </strong>
                {modalCountry["currencies"][`${currencyNameKey[0]}`]["name"]}
              </p>
              <p>
                <strong>Languages: </strong>
                {languagesList.join(",")}
              </p>
            </div>
          </div>
          <div>
            <strong>Border Countries: </strong>
            {borderCountries != undefined
              ? fullName.map((name) => (
                  <button
                    key={name}
                    className="p-4"
                    onClick={() => {
                      let country = getCountryObject(name)[0];
                      setModalCountry(country);
                    }}
                  >
                    {name}
                  </button>
                ))
              : "None"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
