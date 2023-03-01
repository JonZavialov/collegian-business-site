import getDashboardImg from "../../utils/getDashboardImg";

function DashboardCard(props){
    return (
        <div className = "dashboard-card">
            <img src={getDashboardImg()} alt={props.title + " dashboard preview"} ></img>
        </div>
    )
}

export default DashboardCard;