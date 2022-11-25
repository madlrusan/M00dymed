import { MenuItem } from '@mui/material';
import React from 'react';
import { Menu, SideMenu } from './DoctorMenu.components';

export const DoctorMenu = () => {
    return (
        <SideMenu>
            <div>LOGO</div>
            <Menu>
                <MenuItem>Patients</MenuItem>
                <MenuItem>Exercises</MenuItem>
                <MenuItem>Good Reading</MenuItem>
            </Menu>
        </SideMenu>
    );
};
