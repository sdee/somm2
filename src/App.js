import React from "react";
import "./App.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { RadarChart } from "./components/RadarChart";
import { AttributeSlider } from "./components/AttributeSlider";
import { Row, Col, Slider } from "antd";

const dimensions =  ['berry', 'citrus', 'stonefruit', 'grassy', 'floral', 'spicy', 'mineral', 'sweet', 'sour', 'woody', 'tannic', 'body', 'balance', 'finish'];

function App() {
  const initState ={ };
  dimensions.forEach(dimension => initState[dimension] = 0 );
  console.log(initState);
  const [flavors, setFlavors] = useState(initState);
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
