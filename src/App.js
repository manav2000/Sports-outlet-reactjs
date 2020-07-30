import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore'
import { Provider } from 'react-redux';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
