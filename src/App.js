import React from 'react';
import HeroNav from './components/home-page/HeroNav'
import MainHero from './components/home-page/MainHero';
import DashboardsSelector from './components/dashboards/DashboardsSelector';
import './styles/homepage/homepage.css';

function App() {
  return (
    <>
      <div id="home-page">
        <HeroNav />
        <MainHero />
      </div>
      <div id="dashboards-selector">
        <DashboardsSelector />
      </div>
    </>
  );
}

export default App;
