import React, { useState } from 'react';
import Header from "./components/Header";
// import UsfMap from "./components/Map";
import UsfMap2 from "./components/Map2";
// import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import Login from "./components/Login"

function App() {
  const [buildingsList, setBuildingsList] = useState([]);

  return (
    // <div className="app">
    //   <Header />
    //   <div className='flex main-container'>
    //     {/* <Menu setBuildingsList={ setBuildingsList } /> */}
    //     <Menu2 setBuildingsList={ setBuildingsList } />
    //     {/* <UsfMap buildingsList={ buildingsList } /> */}
    //     <UsfMap2 buildingsList={ buildingsList } />
    //   </div>
    // </div>
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
