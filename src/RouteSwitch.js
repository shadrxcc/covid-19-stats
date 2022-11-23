import { Routes, Router } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";

const Routeswitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/countryId" element={Details}></Route>
      </Routes>
    </>
  );
};

export default Routeswitch;
