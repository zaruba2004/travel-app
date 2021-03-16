import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page';
import DescriptionPage from './pages/descriptionPage';
import dataRu from './dataRu';
import dataEng from './dataEng';
import dataByn from './dataByn';

function App() {
  const [state, setState] = useState(dataRu);

    function ruText(){
      setState(dataRu)
    }

    function engText(){
      setState(dataEng)
    }

    function bynText(){
      setState(dataByn)
    }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Travel-app
          </p>
          <div>
            <button onClick={()=>ruText()}>RU</button>
            <button onClick={()=>engText()}>ENG</button>
            <button onClick={()=>bynText()}>BLR</button>
          </div>
        </header>
        <Switch>
          <Route path='/country/:id'>  
            <DescriptionPage country={state}/> 
          </Route>
          <Route path='/'>  
            <HomePage country={state}/> 
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
