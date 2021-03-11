import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Travel-app
        </p>
        <button>language</button>
      </header>      
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
  );
}

export default App;
