import insta from '../../assets/images/instagram.png'
import '../../styles/homepage/socials-bar.css'
import twitter from '../../assets/images/twitter.png'
import redirect from '../../utils/redirect'
import github from '../../assets/images/github.png'

function SocialsBar(){
    return (
        <div id="socials-bar">
            <img src={github} alt="GitHub" onClick={() => redirect('https://www.github.com/jonzavialov/collegian-business-site')}></img>
            <img src={insta} alt="Instagram" onClick={() => redirect('https://www.instagram.com/dailycollegian/')}></img>
            <img src={twitter} alt="Twitter" onClick={() => redirect('https://twitter.com/DailyCollegian')}></img>
        </div>
    )
}

export default SocialsBar;