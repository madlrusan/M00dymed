import { useEffect, useState } from 'react';
import { Appwrite } from '../../services/Appwrite';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
    const { getUser } = Appwrite();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const funct = async () => {
            const user = await getUser();
            return user;
        };
        funct().then((r) => setUser(r));
    }, []);

    if (!user) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
};
