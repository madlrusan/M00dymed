import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import {
    SeparateViewWithDoctorMenu,
    SeparateViewWithForm,
    SeparateViewWithPatientMenu,
} from './Pages/SeparateView/SeparateView';
import { Appwrite } from './services/Appwrite';

const App = () => {
    const { getRole } = Appwrite();
    const [role, setRole] = useState();
    useEffect(() => {
        const funct = async () => {
            const role = await getRole();
            return role;
        };
        funct().then((r) => setRole(r));
    }, []);
    // const role = 1;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<SeparateViewWithForm form="Login" />} />

                        <Route path="register" element={<SeparateViewWithForm form="Register" />} />
                        <Route path="patients" element={<SeparateViewWithDoctorMenu role={1} view="patients" />} />
                        <Route
                            path="addExercises"
                            element={<SeparateViewWithDoctorMenu role={1} view="addExercises" />}
                        />

                        {role == 1 ? (
                            <Route
                                path="seePatient/:email/:role"
                                element={<SeparateViewWithDoctorMenu view="seePatient" role={1} />}
                            />
                        ) : (
                            <Route
                                path="seePatient/:email/:role"
                                element={<SeparateViewWithPatientMenu view="seePatient" role={0} />}
                            />
                        )}
                        <Route path="exercises" element={<SeparateViewWithPatientMenu view="exercises" role={0} />} />
                        <Route path="medication" element={<SeparateViewWithPatientMenu view="medication" role={0} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
