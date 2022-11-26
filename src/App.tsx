import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import { Exercises } from './Pages/Exercises/PacientExercises';
import { SeparateViewWithDoctorMenu, SeparateViewWithForm } from './Pages/SeparateView/SeparateView';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<SeparateViewWithForm form="Login" />} />
                        <Route path="register" element={<SeparateViewWithForm form="Register" />} />
                        <Route path="patients" element={<SeparateViewWithDoctorMenu />} />
                        <Route path="exercises" element={<Exercises/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
