import { Outlet } from "react-router";
import MainHeader from "./MainHeader.tsx";
import MainFooter from "./MainFooter.tsx";

export const MainLayout = () => {
    return (
        <div className={"container"}>
            <MainHeader />

            <main>
                <div>
                    <Outlet />
                </div>
            </main>

            <MainFooter />
        </div>
    );
};

export default MainLayout;
