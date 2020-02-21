import React from 'react';
import logo from './logo.svg';
import Header from './common/header'
import './App.css';
import { Provider } from 'react-redux'
import Home from "./page/home"
import Detail from "./page/detail"
import { BrowserRouter,Route} from 'react-router-dom'
import store from './store/index'

function App() {
  return (
      <Provider store={store}>
          <div>
              <Header/>
              <BrowserRouter>
                  <div>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/detail' exact component={Detail}></Route>
                  </div>

              </BrowserRouter>
          </div>

      </Provider>


  );
}

export default App;
