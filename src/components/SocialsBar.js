import insta from '../assets/instagram.png'
import '../styles/socials-bar.css'
import twitter from '../assets/twitter.png'
import redirect from '../utils/redirect.js'

function SocialsBar(){
    return (
        <div id="socials-bar">
            <img src={insta} alt="Instagram" onClick={() => redirect('https://www.instagram.com/dailycollegian/')}></img>
            <img src={twitter} alt="Twitter" onClick={() => redirect('https://twitter.com/DailyCollegian')}></img>
        </div>
    )
}

export default SocialsBar;