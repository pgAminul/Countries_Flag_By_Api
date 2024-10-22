import React, { useState } from "react";

function country({ country, visitedCountry, visitedCountryFlag }) {
  const { name, flags, capital } = country;
  const { common } = name;
  // const [active, setActive] = useState(true);
  const [activeFlag, setActiveFlag] = useState(true);

  // const multipleFuntionPass = () => {
  //   visitedCountry(common);
  //   setActive(false);
  // };
  const multipleFunctionForFlags = () => {
    visitedCountryFlag(flags);
    visitedCountry(common);
    setActiveFlag(false);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-md">
        <figure>
          <img className="min-w-full h-60 object-cover" src={flags.png} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {common}</h2>
          <p>Capital: {capital}</p>
          <div className="card-actions justify-center gap-3">
            {/* <button
              onClick={() => multipleFuntionPass()}
              disabled={!active}
              className="btn btn-primary"
            >
              Visite
            </button> */}
            <button
              className="btn btn-primary"
              onClick={() => multipleFunctionForFlags()}
              disabled={!activeFlag}
            >
              Add Visited Country
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default country;
