import { TextField } from '@mui/material';
import styled from 'styled-components';
import { transparentPink } from '../../modules/theme';

export const LogoContainer = styled.div`
    padding: 50px;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
`;
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-between;
    align-items: stretch;
`;

export const NameInput = styled(TextField)`
    margin-bottom: 20px !important;
    background: ${transparentPink};
`;
