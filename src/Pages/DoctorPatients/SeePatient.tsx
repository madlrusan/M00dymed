import { Box, CardContent, InputLabel, MenuItem } from '@mui/material';
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
import { CardContainerFlex, FilterForm, FooterContainer } from '../../components/common/Doctors.components';
import { AddMedication } from './AddMedication';
import { Appwrite } from '../../services/Appwrite';
import { useEffect, useState } from 'react';
type SeePatientProps = {
    role: string;
};
export const SeePatient = (props: SeePatientProps) => {
    const { role } = props;
    const [pacientInfo, setPacientInfo] = useState();
    // const role = 'user';
    const { email } = useParams();
    const { getPacientByEmail } = Appwrite();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const funct = async () => {
            const user = await getPacientByEmail(email);
            return user;
        };
        funct().then((response) => {
            setUser(response);
            console.log(response);
        });
    }, []);

    const sliderText = (value: number) => {
        if (value < 3) return 'low';
        else if (value > 3) return 'high';
        else return 'medium';
    };
    console.log(role);
    return (
        <CardContainerFlex>
            <CardContent sx={style}>
                {role == 'user' ? <ModalTitle>My Info</ModalTitle> : <ModalTitle>Pacient Info</ModalTitle>}
                <FormContainer2Columns>
                    <NameInput
                        id="outlined-required"
                        // label={`${user?.FirstName}`}
                        variant="outlined"
                        value={`${user?.FirstName}`}
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
                        // label={role === 'user' ? 'Nume de familie' : 'Last Name'}
                        disabled={role === 'user'}
                        value={`${user?.LastName}`}
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
                        // label={role === 'user' ? 'email@mail.com' : 'Email'}
                        disabled={role === 'user'}
                        value={`${user?.email}`}
                        variant="outlined"
                        onChange={() => {
                            console.log('fbd');
                        }}
                    />
                    <PhoneInput
                        id="outlined-required"
                        // label={role === 'user' ? '0766000000' : 'PhoneNumber'}
                        disabled={role === 'user'}
                        value={`${user?.phone}`}
                        variant="outlined"
                        onChange={() => {
                            console.log('fbd');
                        }}
                    />
                </FormContainer2Columns>
                <CNPInput
                    id="outlined-required"
                    // label={role === 'user' ? '123456789012' : 'CNP'}
                    disabled={role === 'user'}
                    variant="outlined"
                    value={`${user?.PersonalId}`}
                    onChange={() => {
                        console.log('fbd');
                    }}
                    sx={{ width: '95%' }}
                />
                <FormContainer2Columns>
                    {role === 'user' ? (
                        <NameInput
                            id="outlined-required"
                            // label={role === 'user' ? 'Anxietate' : 'Diagnostics'}
                            disabled={role === 'user'}
                            variant="outlined"
                            // value={`${user?.diagnostics}`}
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
                                id="diagnostics"
                                // value={filterValue}
                                label="Diagnostics"
                                defaultValue={`${user?.diagnostics}`} //NU MERGE SA SELECTEZ VALOAREA DIN USER
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
                            max={5}
                            min={1}
                            marks={marks}
                            defaultValue={parseInt(`${user?.diagnosticGrade}`)}
                            getAriaValueText={sliderText}
                            aria-label="Severity Grade"
                            valueLabelDisplay="off"
                        />
                    )}
                </FormContainer2Columns>
                {role === 'doctor' && (
                    <FooterContainer>
                        <SubmitButton>Save</SubmitButton>
                        <AddMedication
                            diagnostic={`${user?.diagnostics}`}
                            severity={user?.diagnosticGrade} //NU MERGE SA PARSEZ MAI DEPARTE SEVERITY GRADE FIX IT PLS
                        ></AddMedication>
                    </FooterContainer>
                )}
            </CardContent>
        </CardContainerFlex>
    );
};
const style = {
    // position: 'absolute' as const,
    padding: '47px',
    position: 'relative' as const,
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
