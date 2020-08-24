import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Radar} from 'react-chartjs-2';
import { useState } from 'react';

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

  return (
    <div className="App">
      <Radar data={data} options={options}/>
    </div>
  );
}

export default App;
