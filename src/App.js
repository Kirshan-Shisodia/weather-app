import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import CityComponent from './Components/CityComponent';
import WeatherInfoComponent from './Components/WeatherInfoComponent';

const API_KEY = '34b78894828856d31180bed06bfb8bb2';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
      e.preventDefault();
      const res = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
      setWeather(res.data);
  }

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (<WeatherInfoComponent weather={weather}/>) : (<CityComponent setCity={setCity} fetchWeather={fetchWeather} />)}
    </Container>
  );
}

export default App;
