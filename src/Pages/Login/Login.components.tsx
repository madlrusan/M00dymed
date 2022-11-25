import { Button, FilledInput, TextField } from '@mui/material';
import styled from 'styled-components';

export const EmailInput = styled(TextField)`
    margin-bottom: 20px !important;
    background: rgba(194, 113, 176, 0.2);
`;
export const PasswordInput = styled(FilledInput)`
    background: rgba(194, 113, 176, 0.2) !important;
`;

export const LoginButton = styled(Button)`
    background-color: rgba(122, 78, 143, 1) !important;
    margin-top: 50px !important;
`;
