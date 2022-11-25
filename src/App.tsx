import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { RightImage } from './components/RightImage';
import { SeparateView } from './Pages/SeparateView/SeparateView';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="test" element={<SeparateView />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
