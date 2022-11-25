import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import { DoctorPatients } from './Pages/DoctorPatients/DoctorPatients';
import { SeparateViewWithFormProps } from './Pages/SeparateView/SeparateView';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<SeparateViewWithFormProps form="Login" />} />
                        <Route path="register" element={<SeparateViewWithFormProps form="Register" />} />

                        <Route path="patients" element={<DoctorPatients />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
