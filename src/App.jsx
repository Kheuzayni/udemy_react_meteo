import loader from "./assets/loader.svg"
import "./app.css"
import { useState, useEffect } from "react";
import browser from "./assets/browser.svg"

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then(response => {
      console.log(response);

      //Gestion des erreures particulières
      if (!response.ok) throw Error (`Error ${response.status}, ${response.statusText}`)

      return response.json()
    })
    .then(responseData => {
      // console.log(responseData);
      setWeatherData({
        city: responseData.data.city,
        country: responseData.data.country,
        iconId: responseData.data.current.weather.ic,
        temperature: responseData.data.current.weather.tp,
      })
    })
    .catch(err => {
      console.log(err)
      console.dir(err)
      setErrorInfo(err.message)
    })
  }, [])

  return (
      <main>
        <p>Test données statique</p>
        <p className="city-name">Casablanca</p>
        <p className="country-name">Maroc</p>
        <p className="temperature-name">10 °</p>
        <div className="info-icon-container">
          <img src = "/icons/01d.svg" className="" alt="weather icon" />
        </div>
        **********************************************************
          <br/><br/>
          <p>Test données api</p>
        <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
          <img src = {loader} alt="loading icon" />
        </div> 
        {weatherData && (
          <>
            <p className="city-name">{weatherData.city}</p>
            <p className="country-name">{weatherData.country}</p>
            <p className="temperature-name">{weatherData.temperature}°</p>
            <div className="info-icon-container">
              <img src = {`/icons/${weatherData.iconId}.svg`} className="info-icon" alt="weather icon" />
            </div>
          </>
          )
        }

        {(errorInfo && !weatherData) && (
          <>
            <p className="error-information">{errorInfo}</p>
            <img src = {browser} alt="error icon" />
          </>
        )}
      </main>
  )
}

export default App;
