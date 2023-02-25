import newspaper from '../assets/newspaper.png';
import '../styles/hero.css'
import getHeroHeight from '../methods/getHeroHeight';

function MainHero(){
    return (
        <div id="hero" style={{height: getHeroHeight()}}>
            <img src={newspaper} alt="Newspaper Graphic"></img>
        </div>
    )
}

export default MainHero;