import "./App.css";
import MarblingArtAccord from "./components/MarblingArtAccord";
import data from "./helper/data";

function App() {
  return (
    <>
      <div className="header">
        <h2>MARBLİNG ART QUESTIONS AND ANSWERS </h2>
      </div>
      <div className="app">
        <div className="main">
          <MarblingArtAccord data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
