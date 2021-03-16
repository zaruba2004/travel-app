import React from 'react';
import './descriptionPage.css'; 
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";
import Weather from '../components/weather';
// import Exchange from '../components/exchange';

export default function DescriptionPagee (props){
    const {id} = useParams();
    const country = props.country[id-1];

    return (
        <div className="container">
            <img src={`.${country.image}`} className="img-fluid" alt={country.nameCountry}></img>
            <h2>{country.nameCountry}</h2>
            <p>{country.city}</p>
            <p>{country.title}</p>
            <div className='widghetFeald'>
                {/* <Exchange codeCoutry={country.code}/> */}
                <Weather metricData={country.placeMark} weatheCity={country.city} times={country.time} /> 
            </div>
            <ReactPlayer width='auto' url={country.video} controls={true} />      
            <YMaps>
                <Map width='auto' defaultState={country.map}>                    
                    <Placemark modules={['geoObject.addon.balloon']} defaultGeometry={country.placeMark}
                        properties={{balloonContentBody:`${country.nameCountry}. ${country.city}`}} />
                    <FullscreenControl />
                </Map>
            </YMaps>
             <div className="place-feald">
                <h3>Достопремичательности</h3>
                <ul>
                    {country.gallery.map(sight => {
                        return  <li key={sight.id}>
                                    <div className="card">
                                    <img src={sight.image} className="card-img-top" alt={sight.place} />
                                    <div className="card-body">
                                        <h5 className="card-title">{sight.place}</h5>
                                        <p className="card-text">{sight.describtion}</p>
                                    </div>
                                    </div>
                                </li>
                    })}
                </ul>
            </div>    
            <p><Link to={'/'}>Назад</Link></p>
        </div>
    )
}