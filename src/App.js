import React from 'react';
import Header from "./components/Header";
import UsfMap from "./components/Map";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Header />
      <div className='flex main-container'>
        <Menu />
        <UsfMap />
      </div>
    </div>
  );
}

export default App;
