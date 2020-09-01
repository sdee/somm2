<<<<<<< Updated upstream
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Radar} from 'react-chartjs-2';
import { useState } from 'react';
=======
import React from "react";
import "./App.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { RadarChart } from "./components/RadarChart";
import { AttributeSlider } from "./components/AttributeSlider";
import { Row, Col, Slider } from "antd";
>>>>>>> Stashed changes

const dimensions =  ['berry', 'citrus', 'stonefruit', 'grassy', 'floral', 'spicy', 'mineral', 'sweet', 'sour', 'woody', 'tannic', 'body', 'balance', 'finish'];
const data = {
  labels: dimensions,
  datasets: [{
      label: 'Previous Tasting',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [5, 6, 10, 7, 8, 1, 9, 7, 5, 3, 6, 7, 9, 9]
  }]
}

<<<<<<< Updated upstream
const options = {
  scale: {
      angleLines: {
          display: false
      },
      ticks: {
          suggestedMin: 0,
          suggestedMax: 10
      },
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
};

function App() {
  const initState ={ };
  dimensions.forEach(dimension => initState[dimension] = 0 );
  console.log(initState);
  const [flavors, setFlavors] = useState({ left: 0, top: 0, width: 100, height: 100 });
  const setAttribute = (attribute, value) => {
    setFlavors(state => ({ ...state, [attribute]: value}));
  };
  const sliders = dimensions.map((dimension) => (
    <AttributeSlider setAttribute={setAttribute} attribute={dimension} />
  ));

  return (
    <div className="App">
      <Row>
        <Col span={12}>
          <RadarChart labels={dimensions} flavors={flavors} />
        </Col>
        <Col span={6}>{sliders}</Col>
      </Row>
    </div>
  );
}

export default App;
