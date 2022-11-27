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

export const SeePatient = () => {
    const [pacientInfo, setPacientInfo] = useState();
    const { getDiagnosis } = Appwrite();
    const [diagnostics, setDiagnostics] = useState([]);
    useEffect(() => {
        getDiagnosis().then((d) => {
            setDiagnostics(d.documents);
        });
    }, []);
    const { email, role } = useParams();
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
        });
    }, []);
    const sliderText = (value: number) => {
        if (value < 3) return 'low';
        else if (value > 3) return 'high';
        else return 'medium';
    };
    return (
        <CardContainerFlex>
            <CardContent sx={style}>
                {role === '0' ? <ModalTitle>My Info</ModalTitle> : <ModalTitle>Pacient Info</ModalTitle>}
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
                        disabled={true}
                    />
                    <NameInput
                        id="outlined-required"
                        // label={role === 'user' ? 'Nume de familie' : 'Last Name'}
                        disabled={true}
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
                        disabled={true}
                        value={`${user?.email}`}
                        variant="outlined"
                        onChange={() => {
                            console.log('fbd');
                        }}
                    />
                    <PhoneInput
                        id="outlined-required"
                        // label={role === 'user' ? '0766000000' : 'PhoneNumber'}
                        disabled={true}
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
                    disabled={true}
                    variant="outlined"
                    value={`${user?.PersonalId}`}
                    sx={{ width: '95%' }}
                />
                <FormContainer2Columns>
                    <FilterForm>
                        <InputLabel>Diagnostics</InputLabel>
                        {user?.diagnostics}
                    </FilterForm>
                    {user?.diagnosticsGrade}
                </FormContainer2Columns>
                {role === '1' && (
                    <FooterContainer>
                        <AddMedication
                            diagnostic={`${user?.diagnostics}`}
                            severity={parseInt(user?.diagnosticsGrade)} //NU MERGE SA PARSEZ MAI DEPARTE SEVERITY GRADE FIX IT PLS
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
