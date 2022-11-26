import React, { useState } from 'react';
import { Menu, SideMenu, StyledItem } from './DoctorMenu.components';
import { mediumPurple } from '../../modules/theme';
import Logo from '.././../../asset/resource/logo.svg';
export const DoctorMenu = (selectedTab) => {
    const [className, setClassName] = useState('');
    // const handleClick = () => {
    //     setClassName('clicked');
    // };
    console.log(window.location.pathname);
    return (
        <SideMenu>
            <div style={{ marginTop: '-20vh', marginBottom: '20vh' }}>
                <img
                    src={Logo}
                    style={{ color: mediumPurple, height: '100%', width: '30vh', alignContent: 'center' }}
                    alt="Logo"
                ></img>
            </div>
            <Menu>
                <StyledItem className={className} path={window.location.pathname}>
                    Patients
                </StyledItem>
                <StyledItem className={className}>Exercises</StyledItem>
                <StyledItem className={className}>Good Reading</StyledItem>
                <StyledItem className={className}>Log out</StyledItem>
            </Menu>
        </SideMenu>
    );
};
