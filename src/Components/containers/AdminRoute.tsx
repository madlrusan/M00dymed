import { Appwrite } from '../../services/Appwrite';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AdminRoute = () => {
    const { getRole } = Appwrite();
    const [role, setRole] = useState();
    useEffect(() => {
        const funct = async () => {
            const role = await getRole();
            return role;
        };
        funct().then((r) => setRole(r));
    }, []);

    if (role === 1) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
};
