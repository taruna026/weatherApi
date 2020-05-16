import React from 'react';
import {Link } from 'react-router-dom';

interface ICityName{
    name: string;
    setName:(type:any)=>void
}

export const CityName: React.FC<ICityName> = (props:ICityName) =>{

    const name = props.name;
    const isEnabled = name.length>0;

    return(
        <div className="App">
        <form>
          <input type="text" placeholder="Enter a city name" onChange={props.setName} value={props.name} className="input-box"/>
          <Link to='/details'><div><button className="btn" type="submit" disabled={!isEnabled}>Get the Forecast</button></div></Link>
        </form>
    </div>
    );
}