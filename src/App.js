import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import './pages/home-page.css';
import DescriptionPage from './pages/descriptionPage';
import dataRu from './dataRu';
import dataEng from './dataEng';
import dataByn from './dataByn';

function App() {
  const [data, setData] = useState(dataRu);
  const [language, setLanguage] = useState(dataRu);

    function ruText(){
      setLanguage(dataRu);
      setData(dataRu)
    }

    function engText(){
      setLanguage(dataEng);
      setData(dataEng)
    }

    function bynText(){
      setLanguage(dataByn);
      setData(dataByn)
    }
    function removeCountry(e) {      
      const value = e.target.value;
      value.toLowerCase();
      setData(language.filter(item => item.nameCountry.toLowerCase().includes(value)));
     };
  
  return (
      <Router>
        <div className="App">
          <header className="App-header">
          <Link to={`/`}><img src={logo} className="App-logo" alt="logo" /></Link>
            <div>
              <h6>Travel-app</h6>           
            </div>
            <div>            
              <button className='btn btn-outline-light btn-sm' onClick={()=>ruText()}>RU</button>
              <button className='btn btn-outline-light btn-sm' onClick={()=>engText()}>ENG</button>
              <button className='btn btn-outline-light btn-sm' onClick={()=>bynText()}>BLR</button>
            </div>
          </header>
          <Switch>
            <Route path='/country/:id'>  
              <DescriptionPage country={data}/> 
            </Route>
            <Route path='/'> 
            {/* <HomePage country={data}/>  */}
            <div className='main-feald'>
            <label className="inputCoutryes">
                <input className="form-control me-2" placeholder='' tipe='text' onChange={removeCountry} />
            </label>  
                <ul>
                    {data.map(land=>{
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
            </Route>
          </Switch>    
          <footer>
            <div className="App-footer">
              <a href="https://github.com/zaruba2004/travel-app/tree/main" target="_blank" rel="noopener noreferrer">
                github zaruba2004
              </a>
              <p>2021</p>
              <a href="https://rs.school/js" target="_blank" rel="noopener noreferrer">
                <img width="100px" src="./images/logo-rss.png" alt="logo-rss"/>
              </a>
            </div>
          </footer>
        </div>
      </Router> 
  );
}

export default App;
