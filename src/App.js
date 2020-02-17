import React from 'react';
import logo from './logo.svg';
import Header from './common/header'
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
      <Provider store={store}>
        <Header/>
      </Provider>


  );
}

export default App;
