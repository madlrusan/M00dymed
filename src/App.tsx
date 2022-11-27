import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import {
    SeparateViewWithDoctorMenu,
    SeparateViewWithForm,
    SeparateViewWithPatientMenu,
} from './Pages/SeparateView/SeparateView';

const App = () => {
    // const { getRole } = Appwrite();
    // const [role, setRole] = useState();
    // useEffect(() => {
    //     const funct = async () => {
    //         const role = await getRole();
    //         return role;
    //     };
    //     funct().then((r) => setRole(r));
    // }, []);
    // const role = 1;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<SeparateViewWithForm form="Login" />} />
                        {/* {role == 2 ? ( */}
                        <>
                            <Route path="register" element={<SeparateViewWithForm form="Register" />} />
                            <Route path="patients" element={<SeparateViewWithDoctorMenu view="patients" />} />
                            <Route path="addExercises" element={<SeparateViewWithDoctorMenu view="addExercises" />} />
                            <Route
                                path="seePatient/:email/:role"
                                element={<SeparateViewWithDoctorMenu view="seePatient" id={'email'} />}
                            />
                        </>
                        {/* ) : ( */}
                        <>
                            <Route path="exercises" element={<SeparateViewWithPatientMenu view="exercises" />} />
                            <Route path="medication" element={<SeparateViewWithPatientMenu view="medication" />} />
                        </>
                        {/* )} */}

                        {/* <Route path="editPatient/:id" element={<EditPatient />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
