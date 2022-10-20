import React from 'react';
import styled from 'styled-components';

export const WeatherInfoIcons = {
    date_Time: "/WeatherLogo/temp.svg",
    humidity: "/WeatherLogo/humidity.svg",
    wind: "/WeatherLogo/wind.svg",
    pressure: "/WeatherLogo/pressure.svg",
};

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfo = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherInfoComponent = (props) => {
    const {weather} = props;
  return (
    <>
    <WeatherContainer>
        <Condition>
            <span>{`${weather?.current?.temperature} °C`}</span>{` | ${weather?.current?.weather_descriptions}`}
        </Condition>
        <WeatherIcon src={weather?.current?.weather_icons[0]} />
    </WeatherContainer>
    <Location>{`${weather?.location?.name}, ${weather?.location?.country}`}</Location>
    <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
    <WeatherInfoContainer>
        <WeatherInfo name="date_Time" value={weather?.location?.localtime} />
        <WeatherInfo name="humidity" value={weather?.current?.humidity}  />
        <WeatherInfo name="wind" value={`${weather?.current?.wind_speed} km/hr`} />
        <WeatherInfo name="pressure" value={weather?.current?.pressure} />
    </WeatherInfoContainer>
    </>
  )
}

export default WeatherInfoComponent