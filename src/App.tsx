import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/containers/Layout';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { RightImage } from './Components/RightImage';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="test" element={<RightImage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
