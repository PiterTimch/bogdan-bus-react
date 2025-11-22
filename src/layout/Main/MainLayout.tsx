import { Outlet } from "react-router";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

export const MainLayout = () => {
    return (
        <div className="w-full bg-[var(--bg)] text-[var(--fg)]">

            <MainHeader />

            <main className="py-5 transition-colors">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </main>

            <MainFooter />
        </div>
    );
};

export default MainLayout;
