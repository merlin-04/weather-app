import React, { useState } from 'react';
import useWeather from './useWeather';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

const App = () => {
  const [city, setCity] = useState('PALAKKAD'); // default city
  const { weatherData, loading, error } = useWeather(city);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city.trim() === '') return; // Do nothing if the input is empty
    setCity(city); // Trigger the weather fetch
  };


  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-4'>
        <h1>Weather Application</h1><br />
        <div className='bg-info p-3 text-light rounded' style={{ height: '300px' }}>
          <label className='fs-3' >Search City here...</label><br /><br />
          <input value={city} onChange={handleCityChange} name='city' style={{ height: '50px' }} className='w-100 ps-3 rounded' type="text" placeholder='Enter City Name' /><br /><br />
          <div className='d-flex justify-content-center align-items-center'>
            <button onClick={handleSearch} type='submit' className='btn btn-warning' style={{ width: '50%', height: '50px' }}>SEARCH</button>
          </div>
        </div>
        <WeatherDisplay weatherData={weatherData} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default App;
