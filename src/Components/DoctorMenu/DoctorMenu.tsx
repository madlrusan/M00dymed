import { Menu, RouteMenuItem, SideMenu } from './DoctorMenu.components';
import { mediumPurple } from '../../modules/theme';
import Logo from '.././../../asset/resource/logo.svg';

export const DoctorMenu = () => {
    console.log(window.location.pathname);
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
                <RouteMenuItem display="Log out" path="/login" />
            </Menu>
        </SideMenu>
    );
};
