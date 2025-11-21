import './App.css'
import {Route, Routes} from "react-router";
import MainLayout from "./layout/Main/MainLayout.tsx";
import NotFoundPage from "./pages/common/NotFoundPage.tsx";
import UserHomePage from "./pages/user/UserHomePage";
import RegisterPage from "./pages/account/RegisterPage";
import CreateCountryPage from "./pages/country/CreateCountryPage";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "./store";

function App() {
    const theme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

  return (
    <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<UserHomePage/>} />

                <Route path="/countries/create" element={<CreateCountryPage />} />

                <Route path={"/register"} element={<RegisterPage/>} />
            </Route>

            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </>
  )
}

export default App
