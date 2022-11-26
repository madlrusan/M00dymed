import { Box, InputLabel, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
    ModalTitle,
    FormContainer2Columns,
    NameInput,
    EmailInput,
    PhoneInput,
    CNPInput,
    DiagnosticInput,
    GradeSlider,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import { FilterForm, FooterContainer } from '../../components/common/Doctors.components';
// type SeePatientProps = {
//     role: string;
// };
export const SeePatient = () => {
    // const { role } = props;
    const role = 'user';
    const { id } = useParams();
    const sliderText = (value: number) => {
        if (value < 3) return 'low';
        else if (value > 3) return 'high';
        else return 'medium';
    };
    const setClassName = (role: string) => {
        if (role === 'user') return 'readonly';
        else return 'editable';
    };
    const className = setClassName(role);
    return (
        <Box sx={style}>
            {role == 'user' ? <ModalTitle>My Info</ModalTitle> : <ModalTitle>Pacient Info</ModalTitle>}
            <FormContainer2Columns>
                <NameInput
                    className={className}
                    id="outlined-required"
                    label={role === 'user' ? 'Prenume' : 'First Name'}
                    variant="outlined"
                    onChange={(e) => {
                        // setRegisterUser({
                        //     ...registerUser,
                        //     firstName: e.target.value,
                        // });
                    }}
                    disabled={role === 'user'}
                />
                <NameInput
                    id="outlined-required"
                    className={className}
                    label={role === 'user' ? 'Nume de familie' : 'Last Name'}
                    disabled={role === 'user'}
                    variant="outlined"
                    onChange={(e) => {
                        // setRegisterUser({
                        //     ...registerUser,
                        //     lastName: e.target.value,
                        // });
                    }}
                />
            </FormContainer2Columns>
            <FormContainer2Columns>
                <EmailInput
                    id="outlined-required"
                    className={className}
                    label={role === 'user' ? 'email@mail.com' : 'Email'}
                    disabled={role === 'user'}
                    variant="outlined"
                    onChange={() => {
                        console.log('fbd');
                    }}
                />
                <PhoneInput
                    id="outlined-required"
                    className={className}
                    label={role === 'user' ? '0766000000' : 'PhoneNumber'}
                    disabled={role === 'user'}
                    variant="outlined"
                    onChange={() => {
                        console.log('fbd');
                    }}
                />
            </FormContainer2Columns>
            <CNPInput
                id="outlined-required"
                className={className}
                label={role === 'user' ? '123456789012' : 'CNP'}
                disabled={role === 'user'}
                variant="outlined"
                onChange={() => {
                    console.log('fbd');
                }}
                sx={{ width: '95%' }}
            />
            <FormContainer2Columns>
                {role === 'user' ? (
                    <NameInput
                        id="outlined-required"
                        className={className}
                        label={role === 'user' ? 'Anxietate' : 'Diagnostics'}
                        disabled={role === 'user'}
                        variant="outlined"
                        onChange={(e) => {
                            // setRegisterUser({
                            //     ...registerUser,
                            //     lastName: e.target.value,
                            // });
                        }}
                        sx={{ width: 220 }}
                    />
                ) : (
                    <FilterForm>
                        <InputLabel>Diagnostics</InputLabel>
                        <DiagnosticInput
                            labelId="diagnostics"
                            className={className}
                            id="diagnostics"
                            // value={filterValue}
                            label="Diagnostics"
                            // onChange={handleChangeFilter}
                            style={{ width: '170px' }}
                        >
                            {diagnostics.map((diagnostic) => {
                                return <MenuItem value={diagnostic.id}>{diagnostic.label}</MenuItem>;
                            })}
                        </DiagnosticInput>
                    </FilterForm>
                )}
                {role === 'user' ? (
                    <GradeSlider
                        max={5}
                        min={1}
                        marks={marks}
                        defaultValue={3}
                        getAriaValueText={sliderText}
                        aria-label="Severity Grade"
                        valueLabelDisplay="off"
                        disabled
                        // sx={{ width: 100 }}
                    />
                ) : (
                    <GradeSlider
                        className={className}
                        max={5}
                        min={1}
                        marks={marks}
                        defaultValue={3}
                        getAriaValueText={sliderText}
                        aria-label="Severity Grade"
                        valueLabelDisplay="off"
                    />
                )}
            </FormContainer2Columns>
            {role === 'doctor' && (
                <FooterContainer>
                    <SubmitButton>Save</SubmitButton>
                </FooterContainer>
            )}
        </Box>
    );
};
const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: `white`,
    borderRadius: '50px',
    boxShadow: 24,
    p: 4,
};
const diagnostics = [
    {
        id: 1,
        label: 'depression',
    },
    {
        id: 2,
        label: 'anxiety',
    },
];
const marks = [
    {
        value: 1,
        label: 'Low',
    },
    {
        value: 3,
        label: 'Medium',
    },
    {
        value: 5,
        label: 'High',
    },
];
