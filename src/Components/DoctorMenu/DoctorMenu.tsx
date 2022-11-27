import { Menu, RouteMenuItem, SideMenu, StyledItem } from './DoctorMenu.components';
import { mediumPurple } from '../../modules/theme';
import { Appwrite } from '../../services/Appwrite';
import { useNavigate } from 'react-router';

export const DoctorMenu = () => {
    const { logout } = Appwrite();
    const navigate = useNavigate();
    return (
        <SideMenu>
            <div style={{ marginTop: '-20vh', marginBottom: '20vh', width: '100%' }}>
                <img
                    src="https://svgshare.com/i/oQG.svg"
                    style={{ color: mediumPurple, height: '100%', width: '100%', alignContent: 'center' }}
                    alt="Logo"
                ></img>
            </div>
            <Menu>
                <RouteMenuItem display="Patients" path="/patients" />
                <RouteMenuItem display="Exercises" path="/addExercises" />
                <RouteMenuItem
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                    display="Logout"
                >
                </RouteMenuItem>
            </Menu>
        </SideMenu>
    );
};
