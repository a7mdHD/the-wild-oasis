import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <div>
            <p>Applayout</p>
            <Outlet />
        </div>
    )
}

export default AppLayout
