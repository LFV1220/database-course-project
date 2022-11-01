import React, { useState } from 'react';
import Header from "./components/Header";
import UsfMap from "./components/Map";
import Menu from "./components/Menu";

function App() {
  const [buildingsList, setBuildingsList] = useState([]);

  return (
    <div className="app">
      <Header />
      <div className='flex main-container'>
        <Menu setBuildingsList={setBuildingsList} />
        <UsfMap buildingsList={buildingsList} />
      </div>
    </div>
  );
}

export default App;
