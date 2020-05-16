import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {CityDetails} from './Components/CityDetails';
import {CityName} from './Components/CityName';
function App() {

  return (
    <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path='/' component={CityName} />
          <Route exact={true} path='/details' component={CityDetails} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
