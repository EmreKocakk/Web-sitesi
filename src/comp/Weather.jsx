import React, { useEffect, useState } from 'react';
import '../css/Weather.css';
import axios from 'axios';

function Weather() {
  const [data, setData] = useState(null)
  const cityName = "bursa";
  const apiKey = "44207d22acee5cda0748d2d9f6fb0256";
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  const fetchWeather = async () => {
    try {
       const response = await axios.get(baseUrl+cityName+"&appid="+apiKey+"&units=metric&lang=tr")
      const { weather: [{ description }], main: { temp, feels_like }, sys: { country }, name } = response.data
      setData({
        description,
        temp,
        feels_like,
        country,
        name
      })
    }
    catch {
      alert("data bulunamadı...")
    }
  }

    useEffect(() => {
      fetchWeather();
    },[])


  return (
    <div className='weather-wrap'>
      <h1> Hava Durumu</h1>
      <div className='weather-container'>
       {data ? (
        <>
        <p className='Ulke'>Ülke: {data.country} </p>
        <p className='Sehir'>Şehir: {data.name} </p>
        <p className='Sıcaklık'>Sıcaklık: {data.temp} °</p>
        <p className='Hıssedılen'>Hissedilen: {data.feels_like} °</p>
        <p className='Hava-durumu'>Hava Durumu: {data.description} </p>
        </>
       ) : (
        <p>veriler yukleniyor...</p>
       )
      } 
       
        
      </div>
    </div>
  );
}

export default Weather;