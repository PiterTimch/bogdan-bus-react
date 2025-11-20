import './App.css'
import {Route, Routes} from "react-router";
import MainLayout from "./layout/Main/MainLayout.tsx";
import NotFoundPage from "./pages/common/NotFoundPage.tsx";
import UserHomePage from "./pages/user/UserHomePage";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<UserHomePage/>} />
            </Route>

            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </>
  )
}

export default App
