import { Outlet } from "react-router";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

export const MainLayout = () => {
    return (
        <div className="
            container mx-auto
            bg-white dark:bg-gray-950
            text-black dark:text-gray-100
            transition-colors min-h-screen
        ">
            <MainHeader />

            <main className="min-h-[70vh] py-5 transition-colors">
                <Outlet />
            </main>

            <MainFooter />
        </div>
    );
};

export default MainLayout;
