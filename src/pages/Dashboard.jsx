// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// helper functions
import { createBudget, fetchData } from "../helper";

// loader
export function dashboardLoader(){
    const userName = fetchData("username");
    const budgets = fetchData('budgets');
    return { userName, budgets }
}

// action
export async function dashboardAction({request}) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    // new user submission
    if (_action === 'newUser') {
        try {
            localStorage.setItem('username', JSON.stringify(values.username));
            return toast.success(`Welcome, ${values.username}.`);
        } catch(e) {
            throw new Error('There was a problem creating your account.');
        }
    }

    if (_action === 'createBudget') {
        try {
            // create budget
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success('Budget created!');
        } catch (e) {
            throw new Error('There was a problem creating your budget.');
        }
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