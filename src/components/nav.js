import logo from '../assets/collegian-logo.png';
import '../styles/nav.css'

function HeroNav(){
    return (
        <div id="rootNav">
            <img src={logo} alt="Collegian Logo"></img>
            <div id="navLinks">
                <a href="/">Home</a>
                <a href="/">Section 1</a>
                <a href="/">Section 2</a>
                <a href="/">Section 3</a>
            </div>
        </div>
    )
}

export default HeroNav;