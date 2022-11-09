import { useState } from 'react';
import Header from "./components/Header";
// import UsfMap from "./components/Map";
import UsfMap2 from "./components/Map2";
// import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";

function App() {
  const [buildingsList, setBuildingsList] = useState([]);

  return (
    <div className="app">
      <Header />
      <div className='flex main-container'>
        {/* <Menu setBuildingsList={ setBuildingsList } /> */}
        <Menu2 setBuildingsList={ setBuildingsList } />
        {/* <UsfMap buildingsList={ buildingsList } /> */}
        <UsfMap2 buildingsList={ buildingsList } />
      </div>
    </div>
  );
}

export default App;
