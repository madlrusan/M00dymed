import { Box, InputLabel, MenuItem, Modal, SelectChangeEvent } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Appwrite } from '../../services/Appwrite';
import {
    CNPInput,
    DiagnosticInput,
    EmailInput,
    FormContainer2Columns,
    GradeSlider,
    ModalTitle,
    NameInput,
    PhoneInput,
    SubmitButton,
} from '../common/CredentialsForm.components';
import { AddBtn, FilterForm, FooterContainer } from '../common/Doctors.components';

interface AddPatientProps {
    diagnostics: any;
    addUser: any;
}

export const AddPatient: FC<AddPatientProps> = ({ diagnostics, addUser }) => {
    const [openModal, setOpenModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cnp, setCnp] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [diagnostic, setDiagnostic] = useState('');
    const [diagnosticGrade, setDiagnosticGrade] = useState(0);
    const { registerUser } = Appwrite();
    const save = async () => {
        await registerUser(email, cnp, firstName, lastName, phone, diagnostic, diagnosticGrade);
        addUser();
        handleClose();
    };
    const handleChangeFilter = (event: SelectChangeEvent) => {
        setDiagnostic(event.target.value);
    };
    const sliderText = (value: number) => {
        if (value < 3) return 'low';
        else if (value > 3) return 'high';
        else return 'medium';
    };
    const handleChange = (event: Event, newValue: number | number[]) => {
        setDiagnosticGrade(newValue as number);
    };
    return (
        <div>
            <AddBtn variant="contained" onClick={handleOpen}>
                Add
            </AddBtn>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalTitle>Add Pacient</ModalTitle>
                    <FormContainer2Columns>
                        <NameInput
                            id="outlined-required"
                            label="First Name"
                            variant="outlined"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <NameInput
                            id="outlined-required"
                            label="Last Name"
                            variant="outlined"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </FormContainer2Columns>
                    <FormContainer2Columns>
                        <EmailInput
                            id="outlined-required"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <PhoneInput
                            id="outlined-required"
                            label="Phone"
                            variant="outlined"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                        />
                    </FormContainer2Columns>
                    <CNPInput
                        id="outlined-required"
                        label="CNP"
                        variant="outlined"
                        onChange={(e) => {
                            setCnp(e.target.value);
                        }}
                    />
                    <FormContainer2Columns>
                        <FilterForm>
                            <InputLabel>Diagnostics</InputLabel>
                            <DiagnosticInput
                                size="small"
                                labelId="diagnostics"
                                id="diagnostics"
                                value={diagnostic}
                                label="Filter by Diagnostics"
                                onChange={handleChangeFilter}
                            >
                                {diagnostics.map((d) => {
                                    return <MenuItem value={d.Name}>{d.Name}</MenuItem>;
                                })}
                            </DiagnosticInput>
                        </FilterForm>
                        <GradeSlider
                            max={5}
                            min={1}
                            marks={marks}
                            defaultValue={3}
                            getAriaValueText={sliderText}
                            aria-label="Severity Grade"
                            valueLabelDisplay="off"
                            onChange={handleChange}
                        />
                    </FormContainer2Columns>
                    <FooterContainer>
                        <SubmitButton onClick={() => save()}>Save</SubmitButton>
                        <SubmitButton onClick={handleClose}>Cancel</SubmitButton>
                    </FooterContainer>
                </Box>
            </Modal>
        </div>
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
        id: 'Depression',
        label: 'Depression',
    },
    {
        id: 'Anxiety',
        label: 'Anxiety',
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
