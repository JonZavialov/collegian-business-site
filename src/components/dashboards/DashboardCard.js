import getDashboardImg from "../../utils/getDashboardImg";
import dashboards from '../../assets/text/dashboards.json';
import redirectToDashboard from "../../utils/redirectToDashboard";
import "../../styles/dashboards/card.css";

function DashboardCard(props){
    return (
        <div className = "card-container">
            <div className = "dashboard-card">
                <img src={getDashboardImg()} alt={props.title + " dashboard preview"} ></img>
                <h2>{props.title}</h2>
                <p>{dashboards[props.title].description}</p>
                <button onClick={() => redirectToDashboard(props.title)}>Open</button>
            </div>
        </div>
    )
}

export default DashboardCard;