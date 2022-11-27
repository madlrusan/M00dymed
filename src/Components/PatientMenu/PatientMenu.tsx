import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mediumPurple } from '../../modules/theme';
import { Appwrite } from '../../services/Appwrite';
import { Menu, SideMenu, RouteMenuItem, StyledItem } from '../DoctorMenu/DoctorMenu.components';

export const PatientMenu = () => {
    const [meUrl, setMeUrl] = useState('');
    useMemo(() => {
        const emailLcl = window.localStorage.getItem('email');
        const roleLcl = window.localStorage.getItem('role');
        setMeUrl('/seePatient/' + emailLcl + '/' + `${roleLcl}`);
    }, []);
    // const emailLcl = window.localStorage.getItem('email');
    // const roleLcl = window.localStorage.getItem('role');
    // setMeUrl('/' + emailLcl + '/' + `${roleLcl}`);
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
                <StyledItem
                    onClick={() => {
                        logout();

                        navigate('/');
                    }}
                    sx={{ 'font-size': '2vw' }}
                >
                    Logout
                </StyledItem>
            </Menu>
        </SideMenu>
    );
};
