import {Routes, Route, useNavigate} from 'react-router-dom';
import NavbarComp from './components/common/NavbarComp.tsx';
import Home from './pages/Home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import {NextUIProvider} from "@nextui-org/react";

function App() {
    const navigate = useNavigate();
    return (
        <NextUIProvider navigate={navigate}>
            <NavbarComp />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </NextUIProvider>
    );
}

export default App;
