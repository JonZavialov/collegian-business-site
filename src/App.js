import React from 'react';
import HeroNav from './components/HeroNav.js'
import MainHero from './components/MainHero.js';
import './styles/homepage.css';

function App() {
  return (
    <div id="home-page">
      <HeroNav />
      <MainHero />
    </div> 
  );
}

export default App;
