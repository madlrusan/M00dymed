import {
    CNPInput,
    EmailInput,
    LogoContainer,
    NameContainer,
    NameInput,
    StyledForm,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import * as React from 'react'
import { TextField } from '@mui/material';

// CNP-u trebe keyboard only numeric
export const Register = () => {
    return (
        <StyledForm>
            <LogoContainer>LOGO</LogoContainer>
            <NameContainer>
                <NameInput id="filled-required" label="First Name" variant="filled" />
                <NameInput id="filled-required" label="Last Name" variant="filled" />
            </NameContainer>
            <EmailInput id="filled-required" label="Email" variant="filled"/>
            <CNPInput id="fill-required" label="CNP" variant="filled"/>
            <CNPInput id="fill-required" label="Confirm CNP" variant="filled"/>

            <SubmitButton variant="contained"> REGISTER </SubmitButton>
        </StyledForm>
    );
};
