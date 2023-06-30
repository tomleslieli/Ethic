import "./App.css";
import Nav from "./nav.jsx";
import Home from "./home.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Main">
        <Home />
      </div>
    </div>
  );
}

export default App;
