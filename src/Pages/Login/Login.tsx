import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { EmailInput, LoginButton, PasswordInput, StyledForm } from './Login.components';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface LoginState {
    emailInput: string;
    passwordInput: string;
    showPassword: boolean;
}
export const Login = () => {
    const [values, setValues] = useState<LoginState>({ emailInput: '', passwordInput: '', showPassword: false });
    const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <StyledForm>
            <EmailInput id="standard-required" label="Email" variant="filled" />
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <PasswordInput
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.passwordInput}
                    onChange={handleChange('passwordInput')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <LoginButton variant="contained">Login</LoginButton>
            </FormControl>
        </StyledForm>
    );
};
