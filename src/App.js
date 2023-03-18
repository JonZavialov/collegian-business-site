import React from 'react';
import HeroNav from './components/home-page/HeroNav'
import MainHero from './components/home-page/MainHero';
import DashboardsSelector from './components/dashboards/DashboardsSelector';
import Footer from './components/misc/Footer';
import './styles/homepage/homepage.css';
import "./styles/dashboards/selector.css";

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
      <Footer />
    </>
  );
}

export default App;
