import React, { Component } from "react";
import globe from "../assets/earth-globe.png";
import axios from "axios";
import Countrylist from "./countrylist";
//import { setWorld } from "../redux/actions";
//import { useDispatch, useSelector } from "react-redux";

class Allcases extends Component {
  state = {
    world: [],
  };

  componentDidMount() {
    axios.get("https://disease.sh/v3/covid-19/all").then((res) => {
      //console.log(res.data);
      this.setState({
        world: res.data,
      });
    });
  }
  render() {
    const { world } = this.state;

    return (
      <div className="pt-3 px-2">
        <div
          id="all"
          className="flex p-3 text-white bg-purple-700 rounded-lg items-center justify-evenly"
        >
          <img className="w-3/12" src={globe} alt="world icon"></img>

          <span key={world.id}>
            <span className="py-2">
              <p className="text-base">Confirmed Cases:</p>
              <p className="text-base">{world.cases}</p>
            </span>
            <span className="py-2">
              <p className="text-base">Affected Countries:</p>
              <p className="text-base">{world.affectedCountries}</p>
            </span>
          </span>
        </div>
        <Countrylist />
      </div>
    );
  }
}

export default Allcases;
