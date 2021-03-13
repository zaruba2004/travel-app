import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

export default function Weather(props) {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '1b641075d50724b2079003689e43bf1a',
    lat: `${props.metricData[0]}`,
    lon: `${props.metricData[1]}`,
    lang: 'ru',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="ru"
      locationLabel={props.weatheCity}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast     //false-не показывать погоду за 5 дней
    />
  );
};