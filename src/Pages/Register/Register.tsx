import {
    CNPInput,
    EmailInput,
    FormContainer2Columns,
    NameInput,
    StyledForm,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Appwrite } from '../../services/Appwrite';
import { useNavigate } from 'react-router-dom';
import { mediumPurple } from '../../modules/theme';
// import * as Logo from '../../../asset/resource/logo.svg';

export const Register = () => {
    const [registerUser, setRegisterUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
        phone: '',
    });
    const [validRegister, setValidRegister] = useState(false);
    const navigate = useNavigate();
    const { registerAdmin } = Appwrite();
    useEffect(() => {
        if (
            registerUser.password === registerUser.confirmPassword &&
            registerUser.password !== '' &&
            registerUser.email !== '' &&
            registerUser.firstName !== '' &&
            registerUser.lastName !== ''
        ) {
            if (registerUser.password.length === 13 && registerUser.password.match(/^[0-9]+$/) != null) {
                setValidRegister(true);
            }
        } else {
            setValidRegister(false);
        }
    }, [registerUser]);

    const registerAccount = async () => {
        await registerAdmin(
            registerUser.email,
            registerUser.password,
            registerUser.firstName,
            registerUser.lastName,
            registerUser.phone,
        );
        navigate('/');
    };
    return (
        <StyledForm style={{ marginBottom: '0vh' }}>
            <div style={{ marginTop: '0vh' }}>
                <img
                    src="https://svgshare.com/i/oQG.svg"
                    style={{ color: mediumPurple, height: '100%', width: '60vh', alignContent: 'center' }}
                    alt="Logo"
                ></img>
                {/* <img src={require('../../../asset/resource/logo.svg')} /> */}
            </div>
            <FormContainer2Columns style={{ marginTop: '10vh' }}>
                <NameInput
                    id="filled-required"
                    label="First Name"
                    variant="filled"
                    onChange={(e) => {
                        setRegisterUser({
                            ...registerUser,
                            firstName: e.target.value,
                        });
                    }}
                />
                <NameInput
                    id="filled-required"
                    label="Last Name"
                    variant="filled"
                    onChange={(e) => {
                        setRegisterUser({
                            ...registerUser,
                            lastName: e.target.value,
                        });
                    }}
                />
            </FormContainer2Columns>
            <EmailInput
                id="filled-required"
                label="Email"
                variant="filled"
                onChange={(e) => {
                    setRegisterUser({
                        ...registerUser,
                        email: e.target.value,
                    });
                }}
            />
            <CNPInput
                id="fill-required"
                label="CNP"
                variant="filled"
                onChange={(e) => {
                    setRegisterUser({
                        ...registerUser,
                        password: e.target.value,
                    });
                }}
            />
            <CNPInput
                id="fill-required"
                label="Confirm CNP"
                variant="filled"
                onChange={(e) => {
                    setRegisterUser({
                        ...registerUser,
                        confirmPassword: e.target.value,
                    });
                }}
            />

            <SubmitButton variant="contained" disabled={!validRegister} onClick={() => registerAccount()}>
                REGISTER
            </SubmitButton>
        </StyledForm>
    );
};
