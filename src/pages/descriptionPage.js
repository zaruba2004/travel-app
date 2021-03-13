import React from 'react';
import './descriptionPage.css'; 
import { useParams, Link } from 'react-router-dom';

export default function DescriptionPagee (props){
    const {id} = useParams();
    const country = props.country[id-1];
    return (
        <div>
            <img src={`.${country.image}`} className="img-fluid" alt={country.nameCountry}></img>
            <h2>{country.nameCountry}</h2>
            <p>{country.city}</p>
            <p>{country.title}</p>
             <div className="place-feald container">
                <h6>Достопремичательности</h6>   {/*className="card stretched-link" style={{width: "13rem"}} */}
                <ul>
                    {country.gallery.map(sight => {
                        return  <li key={sight.id}>
                                    {/* <div><img className="card-img-top" src={sight.image} alt={sight.place} /></div>
                                    <p>{sight.describtion}</p> */}
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