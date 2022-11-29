import { Routes, Route } from "react-router-dom";
import Detailscomp from "./pages/detailscomp";
import Home from "./pages/home";

const Routeswitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/country/:countryInfo" element={<Detailscomp/>}></Route>
        <Route path=""></Route>
      </Routes>
    </>
  );
};

export default Routeswitch;
