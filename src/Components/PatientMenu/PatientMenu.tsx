import React, { useState } from 'react';
import { mediumPurple } from '../../modules/theme';
import { Menu, SideMenu, StyledItem } from '../DoctorMenu/DoctorMenu.components';
import Logo from '../../.././asset/resource/logo.svg';

export const PatientMenu = () => {
    const [className, setClassName] = useState('');
    // const handleClick = () => {
    //     setClassName('clicked');
    // };
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
                <StyledItem className={className}>Me</StyledItem>
                <StyledItem className={className}>Medication</StyledItem>
                <StyledItem className={className}>Exercises</StyledItem>
                <StyledItem className={className}>Good Reading</StyledItem>
                <StyledItem className={className}>Log out</StyledItem>
            </Menu>
        </SideMenu>
    );
};
