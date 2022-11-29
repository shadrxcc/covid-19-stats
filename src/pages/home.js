import { useDispatch, useSelector } from "react-redux";
import Allcases from "../components/allcases";
//import Countrylist from "../components/countrylist";
import Homenavbar from "../components/homenavbar";
import axios from "axios";
import { useEffect } from "react";
import { setCountry } from "../redux/actions";

const Home = () => {
  const countries = useSelector((state) => state);

const dispatch = useDispatch()
  
   const getCountries = async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    ).catch((err) => {
      console.log("Err", err);
    });
    dispatch(setCountry(response.data))
  };

  useEffect(() => {
     getCountries()
     // eslint-disable-next-line
  }, [])

  
  return (
    <>
      <Homenavbar />
      <Allcases/>
    </>
  );
};

export default Home;
