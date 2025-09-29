import {Header} from "./layout/Header.tsx";
import {Route, BrowserRouter, Routes } from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Missions} from "./pages/Missions.tsx";
import {Stats} from "./pages/Stats.tsx";
import {Shop} from "./pages/Shop.tsx";
import {Profile} from "./pages/Profile.tsx";
import './App.css';
import {NotificationProvider} from "./components/Notification.tsx";

function App() {
    return (
        <div className="app">
            <NotificationProvider>
                <BrowserRouter >
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/missions" element={<Missions />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/profile" element={<Profile />}/>
                    </Routes>
                </BrowserRouter>
            </NotificationProvider>
        </div>
    )
}

export default App