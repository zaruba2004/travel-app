import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page';
import DescriptionPage from './pages/descriptionPage';
import data from './data';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Travel-app
          </p>
          <div>
            <button>RU</button>
            <button>ENG</button>
            <button>BLR</button>
          </div>
        </header>
        <Switch>
          <Route path='/country/:id'>  
            <DescriptionPage country={data}/> 
          </Route>
          <Route path='/'>  
            <HomePage country={data}/> 
            {/* <HomePage country={country}/>  */}
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
