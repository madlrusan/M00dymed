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
import { EditMedication } from './EditMedication';
import { AppwriteMedication } from '../../services/AppwriteMedication';
type props = {
    role: number;
};
export const SeePatient = (props: props) => {
    const { role } = props;
    const [pacientInfo, setPacientInfo] = useState();
    const { getDiagnosis } = Appwrite();
    const [diagnostics, setDiagnostics] = useState([]);
    useEffect(() => {
        getDiagnosis().then((d) => {
            setDiagnostics(d.documents);
        });
    }, []);
    const { email } = useParams();
    const { getPacientByEmail } = Appwrite();
    const [user, setUser] = useState(null);
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
                {role === 0 ? <ModalTitle>My Info</ModalTitle> : <ModalTitle>Pacient Info</ModalTitle>}
                <FormContainer2Columns>
                    <NameInput
                        id="outlined-required"
                        label={`FirstName`}
                        variant="outlined"
                        value={`${user?.FirstName}`}
                        disabled={true}
                    />
                    <NameInput
                        id="outlined-required"
                        label={'Last Name'}
                        disabled={true}
                        value={`${user?.LastName}`}
                        variant="outlined"
                    />
                </FormContainer2Columns>
                <FormContainer2Columns>
                    <NameInput
                        id="outlined-required"
                        label={'Email'}
                        disabled={true}
                        value={`${user?.email}`}
                        variant="outlined"
                    />
                    <NameInput
                        id="outlined-required"
                        label={'PhoneNumber'}
                        disabled={true}
                        value={`${user?.phone}`}
                        variant="outlined"
                    />
                </FormContainer2Columns>
                <CNPInput
                    style={{ width: '98%' }}
                    id="outlined-required"
                    label={'CNP'}
                    disabled={true}
                    variant="outlined"
                    value={`${user?.PersonalId}`}
                    sx={{ width: '95%' }}
                />
                <FormContainer2Columns>
                    <NameInput
                        id="outlined-required"
                        label={`Diagnostic`}
                        variant="outlined"
                        value={`${user?.diagnostics}`}
                        disabled={true}
                    />
                    <div></div>
                    <NameInput
                        id="outlined-required"
                        label="Severity grade"
                        variant="outlined"
                        value={`${user?.diagnosticsGrade}`}
                        disabled={true}
                    />
                </FormContainer2Columns>
                {role === 1 && (
                    <FooterContainer>
                        <EditMedication
                            email={user?.email}
                            diagnostic={`${user?.diagnostics}`}
                            severity={parseInt(user?.diagnosticsGrade)}
                        ></EditMedication>
                        <AddMedication
                            email={user?.email}
                            diagnostic={`${user?.diagnostics}`}
                            severity={parseInt(user?.diagnosticsGrade)}
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
    width: '60vw',
    height: '50vh',
    bgcolor: `white`,
    borderRadius: '50px',
    boxShadow: 24,
    p: 4,
};
