import logo from '../../assets/images/collegian-logo.png';
import '../../styles/homepage/nav.css'
import SocialsBar from './SocialsBar';

function HeroNav(){
    return (
        <div id="root-nav">
            <img src={logo} alt="Collegian Logo" id="logo"></img>
            <div id="nav-links">
                <a href="/">Home</a>
                <a href="/">Section 1</a>
                <a href="/">Section 2</a>
                <a href="/">Section 3</a>
                <SocialsBar />
            </div>
        </div>
    )
}

export default HeroNav;