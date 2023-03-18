import '../../styles/misc/footer.css'
import logo from '../../assets/images/collegian-logo.png';

function Footer(){
    return (
        <div id="footer">
            <div id="contacts">
                <h1>Contact Information</h1>
                <hr /> <br />
                <p>
                    <b>collegian.psu.edu</b> <br />
                    115 Carnegie Building <br />
                    University Park, PA 16802 <br />
                    News: 814-863-6897 <br />
                    Business: 814-865-2531 <br />
                    webstaff@psucollegian.com
                </p>
            </div>  
            <img src={logo} alt="Collegian Logo"></img>
        </div>
    )
}

export default Footer