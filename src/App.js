import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // NOTA * * *  USA TU CLAVE DE API AQUI

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      console.error(err); 
      setError('City not found or invalid API key');
      setWeather(null);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 text-gray-800 min-h-screen flex flex-col">
      <header className="bg-teal-600 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Weather Dashboard</h1>
        </div>
      </header>

      <section className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">Weather Dashboard</h1>
          <p className="text-lg text-gray-600 mb-8">Get the latest weather updates for your city</p>
          <div className="bg-white shadow-lg rounded-lg p-6 inline-block text-gray-800">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg mb-4 w-64 focus:outline-none focus:border-teal-500"
              placeholder="Enter city name"
            />
            <button
              onClick={getWeather}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg"
            >
              Get Weather
            </button>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            {weather && (
              <div className="mt-4 w-full text-left">
                <h2 className="text-2xl font-bold">{weather.name}</h2>
                <p className="text-lg">Temperature: {weather.main.temp} °C</p>
                <p className="text-lg">Humidity: {weather.main.humidity} %</p>
                <p className="text-lg">Wind: {weather.wind.speed} m/s</p>
                <p className="text-lg capitalize">Description: {weather.weather[0].description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full bg-gray-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Use Our Weather Dashboard?</h2>
            <div className="flex justify-center space-x-8">
              <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-cloud-sun-rain text-4xl text-teal-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accurate Forecasts</h3>
                <p className="text-gray-600">Get precise and up-to-date weather information for your location.</p>
              </div>
              <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-wind text-4xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Real-time Updates</h3>
                <p className="text-gray-600">Stay informed with live weather updates and alerts.</p>
              </div>
              <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-tachometer-alt text-4xl text-yellow-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-4">User-friendly Interface</h3>
                <p className="text-gray-600">Experience a simple and intuitive design that makes checking the weather easy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Achievements</h2>
            <div className="flex justify-center space-x-8">
              <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-teal-500 mb-4">10M+</h3>
                <p className="text-gray-600">Users Worldwide</p>
              </div>
              <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-blue-500 mb-4">99%</h3>
                <p className="text-gray-600">Accuracy in Forecasts</p>
              </div>
              <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-yellow-500 mb-4">24/7</h3>
                <p className="text-gray-600">Live Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-teal-600">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Weather Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
