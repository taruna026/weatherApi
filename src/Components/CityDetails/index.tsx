import React, { useState, useEffect } from 'react';
import {VictoryChart, VictoryLine, VictoryLabel, VictoryAxis} from "victory"

interface ICityDetails{
    name: string
}

export const CityDetails: React.FC<ICityDetails> = (props:ICityDetails) =>{

    const [data, setData] = useState([]);
    const name = props.name

    //fetching the data from api for a particular city

    const fetchCityData=()=>{
              fetch('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=&appid=b0069842425823d7a53daf72c6eb7429'+name)
                  .then(async(res) =>{
                      let ans = await res.json()
                      setData(ans.list);
                  })
      };
    useEffect(()=>{
        fetchCityData();
    },[]);

    //extracting timestamp, humdity, pressure, temperature from the fetched data
    const time_stamp = data.map((entries: any)=>entries.dt)
    const humidity = data.map((entries: any)=>entries.main.humidity)
    const pressure = data.map((entries: any)=>entries.main.pressure)
    const temp = data.map((entries: any)=>entries.main.temp)

      const graph1 = [];
      const graph2 = [];
      const graph3 = [];

      //converting the extracted data into co-ordinates of the graph
      for(var i=0; i<96; i++)
      {
          graph1.push({"x": time_stamp[i]/10000, "y": humidity[i]});
          graph2.push({"x": time_stamp[i]/10000, "y": pressure[i]});
          graph3.push({"x": time_stamp[i]/10000, "y": temp[i]});
      }
      
    //Plotting graphs
    return(
        <div className="graph-container">
            {/* Graph between time and temperature */}
        <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
        <VictoryLabel text="Temperature" x={225} y={30} textAnchor="middle"/>
            <VictoryLine
                interpolation = "natural"
                data={graph3}
                x="x"
                y="y"
                style={{ labels: { fontSize: 1}}}
            />
            <VictoryAxis dependentAxis/>
            <VictoryAxis cross-dependentAxis
                style={{ tickLabels: { angle: -60 } }}
            />
        </VictoryChart>
        {/* Graph between time and Pressure */}
        <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
        <VictoryLabel text="Pressure" x={225} y={30} textAnchor="middle"/>
            <VictoryLine
                interpolation = "natural"
                data={graph2}
                x="x"
                y="y"
            />
            <VictoryAxis dependentAxis/>
            <VictoryAxis cross-dependentAxis
                style={{ tickLabels: { angle: -60 } }}
            />
        </VictoryChart>
        {/* Graph between time and Humidity */}
        <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
            <VictoryLabel text="Humidity" x={225} y={30} textAnchor="middle"/>
            <VictoryLine
                interpolation = "natural"
                data={graph1}
                x="x"
                y="y"
            />
            <VictoryAxis dependentAxis/>
            <VictoryAxis cross-dependentAxis
                style={{ tickLabels: { angle: -60 } }}
            />
        </VictoryChart>
        </div>

    );
}