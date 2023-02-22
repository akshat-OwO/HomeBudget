// react-router-dom
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helper";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "username"
    });
    // return redirect
    return redirect('/');
}