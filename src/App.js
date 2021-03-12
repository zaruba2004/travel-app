import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page';
import DescriptionPage from './pages/desdcriptionPage';
import data from './data';

function App() {

  // const country = [
  //   {id: 1,image: './images/belarus.jpg', nameCountry: 'Беларусь', city: 'Столица - Минск', title: 'Краткое описание'},
  //   {id: 2,image: './images/ukraine.jpg', nameCountry: 'Украина', city: 'Столица - Киев', title: 'Краткое описание'},
  //   {id: 3,image: './images/poland.jpg', nameCountry: 'Польша', city: 'Столица - Варшава', title: 'Краткое описание'},
  //   {id: 4,image: './images/lithuania.jpg', nameCountry: 'Литва', city: 'Столица - Вильнюс', title: 'Краткое описание'},
  //   {id: 5,image: './images/russia.jpg', nameCountry: 'Россия', city: 'Столица - Москва', title: 'Краткое описание'},
  //   {id: 6,image: './images/france.jpg', nameCountry: 'Франция', city: 'Столица - Париж', title: 'Краткое описание'},
  //   {id: 7,image: './images/australia.jpg', nameCountry: 'Австралия', city: 'Столица - Канберра', title: 'Краткое описание'},
  //   {id: 8,image: './images/israel.png', nameCountry: 'Израиль', city: 'Столица - Иерусалим', title: 'Краткое описание'}
  // ]

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Travel-app
          </p>
          <button>language</button>
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
