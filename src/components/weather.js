import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Clock from './clock'


export default function Weather(props) {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '1b641075d50724b2079003689e43bf1a',
    lat: `${props.metricData[0]}`,
    lon: `${props.metricData[1]}`,
    lang: 'ru',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div>  
        <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="ru"
        locationLabel={<Clock city={props.weatheCity} time={props.times}/>}
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast={false}    //false-не показывать погоду за 5 дней
        />
    </div>    
  );
};