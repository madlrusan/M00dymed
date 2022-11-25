import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/containers/Layout';
import { SeparateViewWithViewProps } from './Pages/SeparateView/SeparateView';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<SeparateViewWithViewProps form="Login" />} />
                        <Route path="register" element={<SeparateViewWithViewProps form="Register" />} />
                        {/* <Route path="test" element={<SeparateView />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export { App };
