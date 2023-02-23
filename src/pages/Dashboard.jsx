// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";

// helper functions
import { fetchData } from "../helper";

// loader
export function dashboardLoader(){
    const userName = fetchData("username");
    return { userName }
}

// action
export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    try {
        localStorage.setItem('username', JSON.stringify(formData.username));
        return toast.success(`Welcome, ${formData.username}.`);
    } catch(e) {
        throw new Error('There was a problem creating your account.');
    }
}

const Dashboard = () => {
    const { userName } = useLoaderData();

    return ( 
        <>
            { userName ? (<p>{userName}</p>) : (<Intro />)}
        </>
    );
}
 
export default Dashboard;