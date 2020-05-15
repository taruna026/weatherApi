import React from 'react';

import './App.css';

function App() {

  const [cityName, setCity] = React.useState('');
  const [data, setData] = React.useState(null);

  const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
};
const getCityData=(event:any)=>{
  event.preventDefault();
        fetch('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=&appid=b0069842425823d7a53daf72c6eb7429'+cityName)
            .then(async(res) =>{
                let ans = await res.json()
                console.log(ans)
            })
}
const isEnabled = cityName.length>0;

  return (
    <div className="App">
        <form onSubmit={getCityData}>
          <input type="text" placeholder="Enter a city name" onChange={onCityChange} value={cityName} className="input-box"/>
          <div><button className="btn" type="submit" disabled={!isEnabled}>Get the Forecast</button></div>
        </form>
    </div>
  );
}

export default App;
