import React, { useEffect, useState } from "react";
import FlagShow from "./flagShow";
import Country from "./country";
export default function countries() {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  const [flags, setFlag] = useState([]);
  useEffect(() => {
    const FetchApi = async () => {
      const url = "https://restcountries.com/v3.1/all";
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    };
    FetchApi();
  }, []);

  const visitedCountry = (country) => {
    const prevVisited = [...visited, country];
    setVisited(prevVisited);
  };

  const visitedCountryFlag = (flag) => {
    const previousFlag = [...flags, flag];
    setFlag(previousFlag);
  };
  return (
    <div className="">
      <h2 className="font-bold text-3xl text-red-600 my-3">
        Total Country Is : {countries.length}
      </h2>

      <div className="my-3">
        <h2 className="text-2xl font-bold text-red-900 mb-3">
          Visited Countries Name:{" "}
        </h2>

        <ul>
          {visited.map((visit, index) => (
            <li className="my-1 text-gray-400" key={index}>
              {" "}
              {visit}
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-2xl font-bold text-red-900 mb-3">
        Visited Countries Flag:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  my-6 ">
        {flags.map((flag, index) => (
          <div key={index} className="flex justify-center items-center">
            <FlagShow flag={flag}></FlagShow>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4 ">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            visitedCountry={visitedCountry}
            visitedCountryFlag={visitedCountryFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
}
