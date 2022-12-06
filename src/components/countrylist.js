import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import virus from "../assets/conifer-virus.png";

const Countrylist = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  const renderList = countries.map((county) => {
    const { countryInfo, country } = county;

    return (
      <div
        className="container-fluid col-md-4 col-lg-3 text-center"
        key={countryInfo._id}
      >
        <Link to={`/country/${countryInfo._id}`}>
          <div className="">
            <div className="my-2 text-center">
              <div className="rounded-lg py-5 bg-purple-700">
                <div className="m-auto flex justify-center">
                  <img src={virus} className="w-25 virus" alt="flag"></img>
                </div>
                <div className="text-white py-2">
                  <h6 className="card-title text-lg font-semibold">
                    {country}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="m-auto row row-cols-8">{renderList}</div>
    </>
  );
};

export default Countrylist;
