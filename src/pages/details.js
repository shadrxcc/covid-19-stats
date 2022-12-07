//import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCountry } from "../redux/actions";
import { TbReportAnalytics } from "react-icons/tb";
import virus from '../assets/conifer-virus.png'

const Details = () => {
  const country = useSelector((state) => state.country);
  const {
    cases,
    tests,
    population,
    continent,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    active,
    critical,
    casesPerOneMillion,
    deathsPerOneMillion,
    testsPerOneMillion,
    oneCasePerPeople,
    oneDeathPerPeople,
    oneTestPerPeople,
    activePerOneMillion,
    recoveredPerOneMillion,
    criticalPerOneMillion,
  } = country;
  const { countryInfo } = useParams();


  const dispatch = useDispatch();
  const fetchDetails = async () => {
    const response = await axios
      .get(`https://disease.sh/v3/covid-19/countries/${countryInfo}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectCountry(response.data));
  };

  useEffect(() => {
    if (countryInfo && countryInfo !== "") fetchDetails();
    // eslint-disable-next-line
  }, [countryInfo]);
  return (
    <div>
      <div className="pt-3 px-2">
        <div
          id="all"
          className="flex p-3 text-white bg-purple-700 rounded-lg items-center justify-evenly"
        >
          <img className="w-3/12 virus" src={virus} alt="world icon"></img>

          <span>
            <span className="py-2">
              <p className="text-base">Continent:</p>
              <p className="text-base">{continent}</p>
            </span>
            <span className="py-2">
              <p className="text-base">Population:</p>
              <p className="text-base">{population}</p>
            </span>
          </span>
        </div>
      </div>

      <div className="container text-center">
        <div className="row p-2">
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Cases</h3>
                <p>{cases}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Today Cases</h3>
                <p>{todayCases}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Deaths</h3>
                <p>{deaths}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Today Deaths</h3>
                <p>{todayDeaths}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Recovered</h3>
                <p>{recovered}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Today Recovered</h3>
                <p>{todayRecovered}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Active</h3>
                <p>{active}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Critical</h3>
                <p>{critical}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Cases per million</h3>
                <p>{casesPerOneMillion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Deaths per million</h3>
                <p>{deathsPerOneMillion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Tests</h3>
                <p>{tests}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Tests Per Million</h3>
                <p>{testsPerOneMillion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Case per people</h3>
                <p>{oneCasePerPeople}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Death per people</h3>
                <p>{oneDeathPerPeople}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Test Per People</h3>
                <p>{oneTestPerPeople}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Active Per Million</h3>
                <p>{activePerOneMillion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Recovered per million</h3>
                <p>{recoveredPerOneMillion}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-center">
            <div className="rounded-lg py-5 bg-purple-700">
              <div className="m-auto flex justify-center">
                <TbReportAnalytics className="text-white fs-1" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Critical per million</h3>
                <p>{criticalPerOneMillion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
