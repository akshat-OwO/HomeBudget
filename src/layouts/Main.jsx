// react-router-dom imports
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav";

// helper functions
import { fetchData } from "../helper";

// loader
export function mainLoader(){
    const userName = fetchData("username");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData();

    return ( 
        <div className="layout">
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    );
}
 
export default Main;