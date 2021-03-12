import React from 'react';
import './home-page.css';
import {Link} from 'react-router-dom';

export default function HomePage (props){
    return (
        <div className='main-feald'>
            <ul>
                {props.country.map(land=>{
                    return <li key={land.id}>                                         
                                <div className="row g-0 bg-light position-relative country-item">
                                <div className="col-md-6 mb-md-0 p-md-4">
                                    <img src={land.image} className="w-100" alt="..." />
                                </div>
                                <div className="col-md-6 p-4 ps-md-0">
                                    <h5 className="mt-0">{land.nameCountry}</h5>
                                    <p>{land.city}</p>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                    <Link to={`/country/${land.id}`}>
                                        <a href="#" className="stretched-link">Подробнее...</a>
                                    </Link>    
                                </div>
                                </div>
                             </li>
                })}            
            </ul>
        </div>
    )
}