import { IconButton, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    PasswordInput,
    SubmitButton,
    EmailInput,
    LogoContainer,
    StyledForm,
} from '../../components/common/CredentialsForm.components';
import { Appwrite } from '../../services/Appwrite';
import { Navigate } from 'react-router-dom';

interface LoginState {
    emailInput: string;
    passwordInput: string;
    showPassword: boolean;
}

export const Login = () => {
    const { loginUser, logout, getUser, getRole } = Appwrite();
    const [values, setValues] = useState<LoginState>({ emailInput: '', passwordInput: '', showPassword: false });
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const funct = async () => {
            const user = await getUser();
            return { user };
        };
        funct().then((response) => {
            setUser(response.user);
            setIsLoading(false);
        });
    }, []);

    const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const Login = async () => {
        try {
            await loginUser(values.emailInput, values.passwordInput);
        } catch (e) {}
    };

    const TEST = async () => {
        try {
            await logout();
        } catch (e) {}
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
    if (isLoading) {
        return <div>LOADING</div>;
    }
    if (!user) {
        return (
            <StyledForm>
                <LogoContainer>LOGO</LogoContainer>
                <EmailInput id="filled-required" label="Email" variant="filled" onChange={handleChange('emailInput')} />

                <PasswordInput
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.passwordInput}
                    onChange={handleChange('passwordInput')}
                    variant="filled"
                    label="Password"
                    InputProps={{
                        endAdornment: (
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
                        ),
                    }}
                />
                <SubmitButton variant="contained" onClick={Login}>
                    Login
                </SubmitButton>
                <SubmitButton variant="contained" onClick={TEST}>
                    TEST
                </SubmitButton>
            </StyledForm>
        );
    } else {
        return <Navigate to={'/patients'} />;
    }
};
