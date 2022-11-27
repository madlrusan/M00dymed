import { Button, TextField, InputLabel, Select, Slider, Typography } from '@mui/material';
import styled, { css } from 'styled-components';
import { lightBlue, darkPurple, mediumPurple, pink, transparentPink, transparentWhite } from '../../modules/theme';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
    padding-top: 30%;
    padding-bottom: 30%;
`;

export const NameInput = styled(TextField)<{ className?: string }>`
    margin-bottom: 20px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    width: 100%;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${darkPurple} !important;
    }
    ${(props) => {
        if (props.className == 'readonly') {
            return css`
                cursor: not-allowed;
            `;
        }
    }};
`;

export const FormContainer2Columns = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: stretch;
`;

export const PasswordInput = styled(TextField)`
    margin-left: 10px !important;
    margin-right: 10px !important;
    background: ${transparentPink} !important;
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    label.Mui-focused {
        color: ${darkPurple} !important;
    }
`;

export const PasswordLabel = styled(InputLabel)`
    label.Mui-focused {
        color: ${darkPurple} !important;
    }
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
`;

export const EmailInput = styled(TextField)`
    margin-bottom: 20px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${darkPurple} !important;
    }
`;

export const CNPInput = styled(TextField)`
    margin-bottom: 20px !important;
    margin-left: 10px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${darkPurple} !important;
    }
`;

export const SubmitButton = styled(Button)`
    margin-left: 10px !important;
    margin-right: 10px !important;
    background-color: ${darkPurple} !important;
    margin-top: 50px !important;
    color: white !important;
`;

export const PhoneInput = styled(TextField)`
    margin-bottom: 20px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${darkPurple} !important;
    }
`;

export const DOBInput = styled(DatePicker)`
    margin-bottom: 20px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    background: ${transparentPink};
    width: 200px;
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${darkPurple} !important;
    }
`;
export const DiagnosticInput = styled(Select)`
    margin-bottom: 20px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${darkPurple} !important;
    }
`;
export const GradeSlider = styled(Slider)`
    .MuiSlider-thumbColorPrimary, .MuiSlider-thumbColorPrimary:hover {
        color: ${transparentWhite} !important;
        height: 5px !important;
        width: 5px !important;
        box-shadow: ${mediumPurple} !important;
    }
    .MuiSlider-mark.MuiSlider-Active {
        background: linear-gradient(89.93deg, #029e2e 0.05%, #f9ff00 49.47%, #a80606 99.94%) !important;
    }
    .MuiSlider-track {
        background: transparent !important;
        height 20px;
        border: 1px solid ${mediumPurple} !important;
    }
    .MuiSlider-rail {
        background: linear-gradient(89.93deg, #029e2e 0.05%, #f9ff00 49.47%, #a80606 99.94%) !important;
        opacity: 1;
        height 20px;
        /* width 150px; */
    }
    margin-left: 30px;
    /* padding-left: 100px !important; */
    margin-right: 20px;
    width: 300px !important;
`;
export const ModalTitle = styled.h2`
    font-size: 20px;
    font-style: italic;
    text-align: center;
    color: ${darkPurple};
`;
