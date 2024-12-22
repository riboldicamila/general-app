import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, CircularProgress } from '@mui/material';
import './Weather.css'; // Import your CSS file for custom styles

const Weather = () => {
  const [city, setCity] = useState('London'); 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "d2d8626067cb3b31c2bd2f9f7007012a";
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit} className="weather-form">
        <TextField
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit">Get Weather</Button>
      </form>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {weatherData && (
        <Card className="weather-card">
          <CardContent>
            <Typography variant="h4">{weatherData.name}</Typography>
            <Typography variant="h6">
              <img 
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description} 
              />
              {weatherData.main.temp}°C
            </Typography>
            <Typography variant="body1">Humidity: {weatherData.main.humidity}%</Typography>
            <Typography variant="body1">Weather: {weatherData.weather[0].description}</Typography>
            <Typography variant="body1">Wind Speed: {weatherData.wind.speed} m/s</Typography>
            <Typography variant="body1">Pressure: {weatherData.main.pressure} hPa</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Weather;