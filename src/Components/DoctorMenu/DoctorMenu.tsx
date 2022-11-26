import React, { useState } from 'react';
import { Menu, SideMenu, StyledItem } from './DoctorMenu.components';
import { mediumPurple } from '../../modules/theme';

export const DoctorMenu = () => {
    const [className, setClassName] = useState('');
    // const handleClick = () => {
    //     setClassName('clicked');
    // };
    console.log(window.location.pathname);
    return (
        <SideMenu>
            <div>
                <img src={'../../../assets/logo.svg'} style={{ color: mediumPurple }} alt="Logo"></img>
            </div>
            <Menu>
                <StyledItem className={className} path={window.location.pathname}>
                    Patients
                </StyledItem>
                <StyledItem className={className}>Exercises</StyledItem>
                <StyledItem className={className}>Good Reading</StyledItem>
            </Menu>
        </SideMenu>
    );
};
