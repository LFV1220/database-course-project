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
  
  function getUserRoutes(email, day) {
    fetch('http://localhost:3001/g')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUserRoutes(data);
      });
  }

  function getMostVisitedBuildings(buildings) {
    fetch('http://localhost:3001/h')
      .then(response => {
        return response.text();
      })
      .then(data => {
        getMostVisitedBuildings(data);
      });
  }

  function insertUser(email, password) {
    fetch('http://localhost:3001/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  function insertClasses(day, email, building, order) {
    fetch('http://localhost:3001/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ day, email, building, order }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  function insertBuildings(building, latitude, longitude) {
    fetch('http://localhost:3001/building', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ building, latitude, longitude }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  function deleteClasses(email) {
    fetch(`http://localhost:3001/classes/${email}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  function deleteBuilding(prefix) {
    fetch(`http://localhost:3001/building/${prefix}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  return (
    <Router>
      <Header isSignedIn={isSignedIn} setSignedIn={setSignedIn} />

      <Routes>
        <Route path='/Login' element={<Login setSignedIn={setSignedIn} />} />

        <Route exact path='/' element={<HomePage />} />

        <Route path='/Login' element={<Login setSignedIn={setSignedIn} />} />

        <Route path='/Signup' element={<Signup setSignedIn={setSignedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
