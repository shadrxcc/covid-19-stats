import React, { Component } from "react";
import globe from "../assets/globe.svg";
import axios from "axios";
//import { setWorld } from "../redux/actions";
//import { useDispatch, useSelector } from "react-redux";

class Allcases extends Component {
  state = {
    world: []
  }

  componentDidMount() {
    axios.get("https://disease.sh/v3/covid-19/all").then((res) => {
      console.log(res.data);
      this.setState({
        world: res.data,
      });
    });
  }
  render() {
    const { world } = this.state

    return (
      <div className="flex relative items-center justify-evenly top-20">
        <img className="w-3/12" src={globe} alt="world icon"></img>

        <span key={world.id}>
          <h2 className="text-lg font-semibold">World</h2>
          <span className="py-2">
            <p className="text-base">{world.cases}</p>
            <p className="text-base">Confirmed Cases</p>
          </span>
          <span className="py-2">
            <p className="text-base">{world.affectedCountries}</p>
            <p className="text-base">Affected Countries</p>
          </span>
        </span>
      </div>
    );
  }
}

export default Allcases;
