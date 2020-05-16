import React, { useState, useEffect } from 'react';
import {VictoryChart, VictoryLine, VictoryLabel} from "victory"

export const CityDetails: React.FC = () =>{

    const [data, setData] = useState([]);
    const name  = "Tonk"

    const fetchCityData=()=>{
              fetch('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=&appid=b0069842425823d7a53daf72c6eb7429'+name)
                  .then(async(res) =>{
                      let ans = await res.json()
                      setData(ans.list);
                  })
      };
    useEffect(()=>{
        fetchCityData();
    }, []);

    // const graph = [data.map((entries:any)=>
    //         {x: entries.dt, y: entries.main.humidity})
    //       ];
    
    const time_stamp = data.map((entries: any)=>entries.dt)
    const humidity = data.map((entries: any)=>entries.main.humidity)
    const pressure = data.map((entries: any)=>entries.main.pressure)
    const temp = data.map((entries: any)=>entries.main.temp)

      const graph1 = [];
      for(var i=0; i<96; i++)
      {
          graph1.push({"x": time_stamp[i], "y": humidity[i]});
      }
      
      const graph2 = [];
      for(var i=0; i<96; i++)
      {
          graph2.push({"x": time_stamp[i], "y": pressure[i]});
      }

      const graph3 = [];
      for(var i=0; i<96; i++)
      {
          graph3.push({"x": time_stamp[i], "y": temp[i]});
      }
      console.log(graph1)

    
    return(
        <div>
        <VictoryChart>
  <VictoryLine
    interpolation = "natural"
    data={graph1}
    x="x"
    y="y"
  />
</VictoryChart>
<VictoryChart>
  <VictoryLine
    interpolation = "natural"
    data={graph2}
    x="x"
    y="y"
  />
</VictoryChart>
<VictoryChart>
<VictoryLine
  interpolation = "natural"
  data={graph3}
  x="x"
  y="y"
/>
</VictoryChart>
</div>
    );
}