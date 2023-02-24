// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// helper functions
import { fetchData } from "../helper";

// loader
export function dashboardLoader(){
    const userName = fetchData("username");
    const budgets = fetchData('budgets');
    return { userName, budgets }
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
    const { userName, budgets } = useLoaderData();

    return ( 
        <>
            { userName ? (
                <div className="dashboard">
                    <h1>Welcome back, <span className="accent">{userName}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? () : ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>    
            ) : (<Intro />)}
        </>
    );
}
 
export default Dashboard;