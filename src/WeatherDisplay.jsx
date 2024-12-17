import React from 'react';

const WeatherDisplay = ({ weatherData, loading, error }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (!weatherData) {
    return <h3>No weather data available</h3>;
  }


  return (
    <div className='m-2 bg-danger p-3 text-light rounded'>
      <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
      <p>Temperature:  {weatherData.main.temp}°C</p>
      <p>Humidity:  {weatherData.main.humidity}%</p>
      <p>Weather:  {weatherData.weather[0].description}</p>
      <p>Wind Speed:  {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
