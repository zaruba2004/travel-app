import React from 'react';
import './home-page.css'; 
import { useParams } from 'react-router-dom';

export default function DescriptionPagee (props){
    const {id} = useParams();
    const country = props.country[id-1];
    return (
        <div>
            <img src={country.image} className="img-fluid" alt={country.nameCountry}></img>
            <h2>{country.nameCountry}</h2>
            <p>{country.city}</p>
            <p>{country.title}</p>
        </div>
    )
}