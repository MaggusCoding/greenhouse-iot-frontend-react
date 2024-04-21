import {Routes, Route, useNavigate} from 'react-router-dom';
import NavbarComp from './components/NavbarComp.tsx';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
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
