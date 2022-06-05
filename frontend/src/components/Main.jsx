import React, { useEffect,useState } from 'react'
import axios from "axios";
import "./weather.css"



const Main = () => {
  const[weather,SetWeather]=useState([]);
  const[place,setPlace]=useState('');

    useEffect(function () {
        
    },[]);

  const handleChange=(e)=>{
    console.log(e.target.value)
    setPlace(e.target.value)
  }
  const handleClick=(e)=>{
    e.preventDefault();
    axios.get( `http://localhost:5000/?place=${place}`,  { crossdomain: true })
        .then(response => {
        
        console.log(response.data);
     /*    data.push(response.data) */
     SetWeather([response.data])
        
        console.log(weather)
    }).catch(err=>{
        console.log(err)
    });
        // eslint-disable-next-line react-hooks/exhaustive-deps
         // eslint-disable-next-line

  setPlace('');
  }
  return (
      
    <>
   
      <div className="weather">
         <div className="sub">
            <h1 className='heading'>Weather app</h1>
            <input type="text" onChange={handleChange} value={place}/>
            <button onClick={handleClick}>Click</button>
            <div className="desc">
            {
              weather.map((index)=>{
                return(
                  <div key={index.id} className="wrap">
                    <div className="left">
                      <img
                          src={
                            require(`../images/${index.weather[0].icon}.svg`)
                          }
                    />
                    <h2>{index.weather[0].main}</h2>
						        </div>
                  <div className="right">
                    <h1>{index.name}</h1>
                    
                    <h2>Temprature  {index.main.temp}</h2>
                    <h3>Max Temp:- {index.main.temp_max}</h3>
                    <h3>Min Temp:- {index.main.temp_min}</h3>
                  </div>
                  </div>
                )
              })
            }
            </div>
         </div>
      </div>
    </>
  
  )
}

export default Main;