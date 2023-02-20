// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helper";

// loader
export function dashboardLoader(){
    const userName = fetchData("username");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData();

    return ( 
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    );
}
 
export default Dashboard;