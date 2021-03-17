import React from 'react';
import './home-page.css';
import {Link} from 'react-router-dom';

export default function HomePage (props){
    return (
        <div className='main-feald'>
            {/* <button onclick={()=>props.closeInput()}>Clouse</button> */}
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
                                    <Link className="stretched-link" to={`/country/${land.id}`}>
                                        Подробнее...
                                    </Link>    
                                </div>
                                </div>
                             </li>
                })}            
            </ul>
        </div>
    )
}