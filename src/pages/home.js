import { useDispatch, useSelector } from "react-redux";
import Allcases from "../components/allcases";
//import Countrylist from "../components/countrylist";
import Homenavbar from "../components/homenavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { setCountry } from "../redux/actions";
import Countrylist from "../components/countrylist";
import { Link } from "react-router-dom";
import virus from "../assets/conifer-virus.png";

const Home = () => {
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/continents")
      .then((res) => setContinents(res.data))
      .catch((err) => console.log(err));
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) =>
        dispatch(setCountry(res.data)).catch((err) => console.log(err))
      );
  }, []);

  useEffect(() => {
    if (selectedContinent) {
      setFiltered(
        continents.filter((con) => con.continent === selectedContinent)[0]
          .countries
      );
    } else {
      setFiltered([]);
    }
  }, [selectedContinent]);

  return (
    <>
      <Homenavbar />
      <Allcases />

      <span className="flex justify-end py-2 pr-3">
        <select
          className=" bg-purple-700 rounded-lg p-2 text-white"
          onChange={(e) => setSelectedContinent(e.target.value)}
        >
          <option value="">Filter by continent</option>
          {continents?.map((con) => (
            <option value={con.continent} key={con.continent}>
              {con.continent}{" "}
            </option>
          ))}
        </select>
      </span>
      {filtered.length ? (
        filtered.map((fil) => (
          <div
            className="container-fluid col-md-4 col-lg-3 text-center"
            key={fil}
          >
            <Link to={`/country/${fil}`}>
              <div className="">
                <div className="my-2 text-center">
                  <div className="rounded-lg py-5 bg-purple-700 shadow-lg shadow-purple-700/50">
                    <div className="m-auto flex justify-center">
                      <img src={virus} className="w-25 virus" alt="flag"></img>
                    </div>
                    <div className="text-white py-2">
                      <h6 className="card-title text-lg font-semibold">
                        {fil}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <Countrylist />
      )}
    </>
  );
};

export default Home;
