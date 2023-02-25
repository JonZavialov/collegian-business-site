import newspaper from '../assets/newspaper.png';
import '../styles/hero.css'

function MainHero(){
    return (
        <div id="hero">
            <h1>STREET TEAM</h1>
            <img src={newspaper} alt="Newspaper Graphic"></img>
        </div>
    )
}

export default MainHero;