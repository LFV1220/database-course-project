import Header from "./components/Header";
import HomePage from './components/HomePage';
import Login from "./components/Login";
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
        <Route path='/Login' element={ <Login /> } />

        <Route exact path='/' element={ <HomePage /> } />
      </Routes>
    </Router>
  );
}

export default App;
