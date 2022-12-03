import { useEffect } from 'react'
import Header from "./components/Header";
import HomePage from './components/HomePage';
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useState } from "react";
import Signup from './components/Signup';

function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [UserRoutes, setUserRoutes] = useState(false);
  const [user, setUser] = useState();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [email, setEmail] = useState('joshua135@usf.edu');
  /*
  useEffect(() => {
    days.forEach(element => {
      getUserRoutes(email, element);
    });
  }, [email]);
  */
  /* Add setUser(user) and useEffect [user] hook or something  then replace all instances of email with user.email */

  return (
    <Router>
      <Header isSignedIn={isSignedIn} setSignedIn={setSignedIn} />

      <Routes>
        <Route path='/Login' element={<Login setSignedIn={setSignedIn} />} />

        <Route exact path='/' element={<HomePage isSignedIn={isSignedIn} />} />

        <Route path='/Login' element={<Login setSignedIn={setSignedIn} />} />

        <Route path='/Signup' element={<Signup setSignedIn={setSignedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
