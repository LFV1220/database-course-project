import React, { useState } from 'react';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import Login from "./components/Login";
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        <Route path='/Login' element={<Login />} />

        <Route path='/Signup' element={<Signup />} />
        {/* <Route path='/'><HomePage /></Route>
        <Route path='/Login'><Login /></Route>
        <Route path='/Signup'><Signup /></Route> */}

      </Routes>
    </Router>
  );
}

export default App;
