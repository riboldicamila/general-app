import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import BreadCrumbs from "../GeneralUtilities/BreadCrumbs";
import SimpleButton from "../GeneralUtilities/SimpleButton";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("London");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setCurrentWeatherData(currentResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecastData(forecastResponse.data);
    } catch (err) {
      setError("Error fetching weather data");
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
      <BreadCrumbs pageTitle="Weather" />

      <form onSubmit={handleSubmit} className="weather-form">
        <TextField
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <SimpleButton label="Get Weather" />
      </form>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {currentWeatherData && (
        <Card className="weather-card">
          <CardContent>
            <Typography variant="h4">{currentWeatherData.name}</Typography>
            <Typography variant="h6">
              <img
                src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
                alt={currentWeatherData.weather[0].description}
              />
              {currentWeatherData.main.temp}°C
            </Typography>
            <Typography variant="body1">
              Humidity: {currentWeatherData.main.humidity}%
            </Typography>
            <Typography variant="body1">
              Weather: {currentWeatherData.weather[0].description}
            </Typography>
            <Typography variant="body1">
              Wind Speed: {currentWeatherData.wind.speed} m/s
            </Typography>
            <Typography variant="body1">
              Pressure: {currentWeatherData.main.pressure} hPa
            </Typography>
          </CardContent>
        </Card>
      )}
      {forecastData && (
        <div className="forecast-container">
          <Card
            className="forecast-title-card"
            sx={{
              backgroundColor: "var(--pale-lilac)",
              padding: "10px",
              margin: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: "left", fontWeight: 700 }}
            >
              5-Day Extended <br /> Forecast
            </Typography>
          </Card>
          {forecastData.list.map((forecast, index) => (
            <Card key={index} className="forecast-card">
              <CardContent>
                <Typography variant="h6">
                  {new Date(forecast.dt * 1000).toLocaleString()}
                </Typography>
                <Typography variant="body1">
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    alt={forecast.weather[0].description}
                  />
                  {forecast.main.temp}°C
                </Typography>
                <Typography variant="body1">
                  Humidity: {forecast.main.humidity}%
                </Typography>
                <Typography variant="body1">
                  Weather: {forecast.weather[0].description}
                </Typography>
                <Typography variant="body1">
                  Wind Speed: {forecast.wind.speed} m/s
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
