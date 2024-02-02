import loader from "./assets/loader.svg"
import "./app.css"

function App() {
 
  return (

      <main>
        <div className="loader-container">
          <img src = {loader} alt="loading icon" />
        </div> 
        <p className="city-name">Dakar</p>
        <p className="country-name">Sénégal</p>
        <p className="temperature-name">30 °</p>
        <div className="info-icon-container">
          <img src = "/icons/01d.svg" className="" alt="weather icon" />
        </div>
      </main>
  
  );
}

export default App;
