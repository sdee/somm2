import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { RadarChart } from "./components/RadarChart";
import { AttributeSlider } from "./components/AttributeSlider";

const App = () => {
  const dimensions = [
    "berry",
    "citrus",
    "stonefruit",
    "grassy",
    "floral",
    "spicy",
    "mineral",
    "sweet",
    "sour",
    "woody",
    "tannic",
    "body",
    "balance",
    "finish",
  ];

  const initState = {};
  dimensions.forEach((dimension) => (initState[dimension] = 0));
  
  const [flavors, setFlavors] = useState(initState);

  const setAttribute = (attribute, value) => {
    setFlavors((state) => ({ ...state, [attribute]: value }));
  };
  const sliders = dimensions.map(dimension =>  <AttributeSlider setAttribute={setAttribute} attribute={dimension}/>);

  return (
    <div className="App">
      <RadarChart labels={dimensions} flavors={flavors} />
      {sliders}
    </div>
  );
};

export default App;
