// react-router-dom
import { redirect } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helper";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "username"
    });
    deleteItem({
        key: "budgets"
    });
    deleteItem({
        key: "expenses"
    });
    toast.success("You've deleted your account!");
    // return redirect
    return redirect('/');
}