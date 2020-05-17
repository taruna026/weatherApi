import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {CityDetails} from './Components/CityDetails';
import {CityName} from './Components/CityName';
function App() {

  const [cityName, setCity] = React.useState('');
    
  
    const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value);
    }

  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' render={()=><CityName name={cityName} setName={onCityChange}/>} />
          <Route exact={true} path='/details' render={()=><CityDetails name={cityName}/>} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
