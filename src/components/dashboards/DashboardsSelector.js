import dashboards from '../../assets/text/dashboards.json';
import DashboardCard from './DashboardCard';

function DashboardsSelector(){
    return (
        Object.keys(dashboards).map((title) => (
            <DashboardCard title={title} key={title} />
        ))
    )
}

export default DashboardsSelector;