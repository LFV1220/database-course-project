import Header from "./components/Header";
import Map from "./components/Map";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Map />
        <Menu />
      </div>
    </div>
  );
}

export default App;
