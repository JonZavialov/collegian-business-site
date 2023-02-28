import React from 'react';
import HeroNav from './components/home-page/HeroNav.js'
import MainHero from './components/home-page/MainHero.js';
import DashboardsSelector from './components/dashboards/DashboardsSelector.js';
import './styles/homepage/homepage.css';

function App() {
  return (
    <>
      <div id="home-page">
        <HeroNav />
        <MainHero />
      </div>
      <DashboardsSelector />
    </>
  );
}

export default App;
