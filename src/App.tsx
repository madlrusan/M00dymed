import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import {
    SeparateViewWithDoctorMenu,
    SeparateViewWithExercises,
    SeparateViewWithForm,
    SeparateViewWithSeePatient,
} from './Pages/SeparateView/SeparateView';
import { SeePatient } from './Pages/DoctorPatients/SeePatient';
import { EditPatient } from './Pages/DoctorPatients/EditPatient';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<SeparateViewWithForm form="Login" />} />
                        <Route path="register" element={<SeparateViewWithForm form="Register" />} />
                        <Route path="patients" element={<SeparateViewWithDoctorMenu />} />
                        <Route path="exercises" element={<SeparateViewWithExercises />} />
                        <Route path="seePatient/:id" element={<SeePatient />} />
                        <Route path="editPatient/:id" element={<EditPatient />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
