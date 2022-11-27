import { mediumPurple } from '../../modules/theme';
import { Menu, SideMenu, RouteMenuItem } from '../DoctorMenu/DoctorMenu.components';

export const PatientMenu = () => {
    return (
        <SideMenu>
            <div style={{ marginTop: '-20vh', marginBottom: '20vh' }}>
                <img
                    src="https://svgshare.com/i/oQG.svg"
                    style={{ color: mediumPurple, height: '100%', width: '30vh', alignContent: 'center' }}
                    alt="Logo"
                ></img>
            </div>
            <Menu>
                <RouteMenuItem display="Me" path="" />
                <RouteMenuItem display="Medication" path="/medication" />
                <RouteMenuItem display="Exercises" path="/exercises" />
                <RouteMenuItem display="Good Reading" path="#" />
                <RouteMenuItem display="Log out" path="/login" />
            </Menu>
        </SideMenu>
    );
};
