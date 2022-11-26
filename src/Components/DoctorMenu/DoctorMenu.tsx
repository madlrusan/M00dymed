import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { Menu, SideMenu, StyledItem } from './DoctorMenu.components';

export const DoctorMenu = () => {
    const [className, setClassName] = useState('');
    const handleClick = () => {
        setClassName('clicked');
    };
    console.log(window.location.pathname);
    return (
        <SideMenu>
            <div>LOGO</div>
            <Menu>
                <StyledItem className={className} path={window.location.pathname} onClick={handleClick}>
                    Patients
                </StyledItem>
                <MenuItem>Exercises</MenuItem>
                <MenuItem>Good Reading</MenuItem>
            </Menu>
        </SideMenu>
    );
};
