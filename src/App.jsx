import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav className='navbar navbar-fixed-top navbar-default'>
          <div className='container center'>
              <button type="button" className="navbar-toggle" data-toggle='collapse' data-target='.navbar-collapse'>
                <span className="sr-only">Togle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <ul className='nav navbar-nav'>
                <li><a>All</a></li>
                <li><a>Online</a></li>
                <li><a>Offline</a></li>
              </ul>
            </div>

        </nav>
      </div>
    );
  }
}

export default App;
