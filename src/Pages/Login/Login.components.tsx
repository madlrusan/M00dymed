import { FilledInput, InputLabel, TextField } from '@mui/material';
import styled from 'styled-components';
import { darkPurple, mediumPurple, pink, transparentPink } from '../../modules/theme';

export const PasswordInput = styled(TextField)`
    background: ${transparentPink} !important;
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    label.Mui-focused {
        color: ${mediumPurple} !important;
    }
`;

export const PasswordLabel = styled(InputLabel)`
    label.Mui-focused {
        color: ${mediumPurple} !important;
    }
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
`;
