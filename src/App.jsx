import loader from "./assets/loader.svg"
import "./app.css"
import { useState, useEffect } from "react";
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(responseData => {
      console.log(responseData);
      setWeatherData({
        city: responseData.data.city,
        country: responseData.data.country,
        iconId: responseData.data.ic,
        temperature: responseData.data.curent.weather.tp,
      })
    })

  }, [])


 
  return (

      <main>
        <div className={`loader-container ${!weatherData && "active"}`}>
          <img src = {loader} alt="loading icon" />
        </div> 
        <p>Test données api</p>
        <p className="city-name">Dakar</p>
        <p className="country-name">Sénégal</p>
        <p className="temperature-name">30 °</p>
        <div className="info-icon-container">
          <img src = "/icons/01d.svg" className="" alt="weather icon" />
        </div>
        
        <br/><br/><br/>
        ////////////////////////////////////////////////////////////////
        <p>Test données statique</p>
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
