import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mediumPurple } from '../../modules/theme';
import { Appwrite } from '../../services/Appwrite';
import { Menu, SideMenu, RouteMenuItem } from '../DoctorMenu/DoctorMenu.components';

export const PatientMenu = () => {
    const [meUrl, setMeUrl] = useState('');
    const { getUser } = Appwrite();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const funct = async () => {
            const user = await getUser();
            return user?.email;
        };
        funct().then((r) => setUser(r));
        setMeUrl('/' + user + '/0');
    }, []);
    // setMeUrl('/' + user?.email + '/0');
    return (
        <SideMenu>
            <div style={{ marginTop: '-20vh', marginBottom: '20vh', display: 'block' }}>
                <img
                    src="https://svgshare.com/i/oQG.svg"
                    style={{ color: mediumPurple, height: '100%', width: '100%', alignContent: 'center' }}
                    alt="Logo"
                ></img>
            </div>
            <Menu>
                <RouteMenuItem display="Me" path={meUrl} />
                <RouteMenuItem display="Medication" path="/medication" />
                <RouteMenuItem display="Exercises" path="/exercises" />
                <RouteMenuItem display="Good Reading" path="#" />
                <RouteMenuItem display="Log out" path="/" />
            </Menu>
        </SideMenu>
    );
};
