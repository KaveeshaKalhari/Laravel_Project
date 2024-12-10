import {Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./Contexts/StateContext";

export default function DefaultLayout(){
    const{user, token, setToken} = useStateContext()

    if(!token){
        return <Navigate to ="/auth/login"/>;
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        setToken(null);
    };

    return(
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
                {/* <Link to="/dashboard"></Link>
                <Link to="/dashboard"></Link> */}
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                    {user?.name && <span>Welcome, {user.name}</span>}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}