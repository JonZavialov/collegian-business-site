import '../../styles/homepage/hero.css'
import scroll from '../../assets/images/scroll.png'

function MainHero(){
    return (
        <div id="hero">
            <h1>STREET TEAM</h1>
            <img src={scroll} alt="Scroll Arrow" id="scroll-arrow"></img>
        </div>
    )
}

export default MainHero;