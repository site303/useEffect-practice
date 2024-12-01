
import React from 'react';
import './styles/styles.css';

import Header from './components/Header';
import CalmIntro from './components/CalmIntro';
import CalmCards from './components/CalmCards';
import CalmInfo from './components/CalmInfo';
import CalmMailForm from './components/CalmMailForm.js';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    setCity(e.target.value);
  }
  const handleClick = () => {
    setCitySearch(city);
  }

  useEffect(() => {
    const myFetchData = async () => {
      if (!citySearch) return;
      setLoading(true);
      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=fa55c9b48bf19b93b69b0f2b81fdf56c&units=metric&lang=ru`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=fa55c9b48bf19b93b69b0f2b81fdf56c&units=metric&lang=ru`);
      const data = await response.json();
      setLoading(false);
      setWeatherInfo(response.data);
      // setWeatherInfo(data);
    }
    myFetchData()
  }, [citySearch])


  return (
    <div className="App">

      <input
        type="text"
        value={city}
        onChange={handleUpdate} />
      <button
        onClick={handleClick}>
        ok
      </button>
      {loading && <div>Загрузка...</div>}
      {!loading && (
        <div>{weatherInfo?.main?.feels_like}</div>
      )}
      {/* <Header />
      <CalmIntro />
      <CalmCards />
      <CalmInfo />
      <CalmMailForm />
      <Footer /> */}

    </div>
  );
}

export default App;
