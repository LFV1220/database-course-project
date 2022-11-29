import Header from "./components/Header";
import HomePage from './components/HomePage';
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useState } from "react";

function App() {

  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <Router>
      <Header isSignedIn={isSignedIn} setSignedIn={setSignedIn} />

      <Routes>
        <Route path='/Login' element={<Login setSignedIn={setSignedIn} />} />

        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
