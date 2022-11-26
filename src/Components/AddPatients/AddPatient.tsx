import { Box, InputLabel, MenuItem, Modal, Slider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { transparentWhite } from '../../modules/theme';
import {
    CNPInput,
    DiagnosticInput,
    DOBInput,
    EmailInput,
    FormContainer2Columns,
    GradeSlider,
    ModalTitle,
    NameInput,
    PhoneInput,
    SubmitButton,
} from '../common/CredentialsForm.components';
import { AddBtn, FilterForm, FooterContainer } from '../common/Doctors.components';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export const AddPatient = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const sliderText = (value: number) => {
        if (value < 3) return 'low';
        else if (value > 3) return 'high';
        else return 'medium';
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
                                // setRegisterUser({
                                //     ...registerUser,
                                //     firstName: e.target.value,
                                // });
                            }}
                        />
                        <NameInput
                            id="outlined-required"
                            label="Last Name"
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
                            label="Email"
                            variant="outlined"
                            onChange={() => {
                                console.log('fbd');
                            }}
                        />
                        <PhoneInput
                            id="outlined-required"
                            label="Phone"
                            variant="outlined"
                            onChange={() => {
                                console.log('fbd');
                            }}
                        />
                    </FormContainer2Columns>
                    <FormContainer2Columns>
                        <CNPInput
                            id="outlined-required"
                            label="CNP"
                            variant="outlined"
                            onChange={() => {
                                console.log('fbd');
                            }}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DOBInput
                                views={['day']}
                                label="Date Of Birth"
                                value={0}
                                onChange={(newValue) => {
                                    console.log(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    </FormContainer2Columns>
                    <FormContainer2Columns>
                        <FilterForm>
                            <InputLabel>Diagnostics</InputLabel>
                            <DiagnosticInput
                                labelId="diagnostics"
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
                        <GradeSlider
                            max={5}
                            min={1}
                            marks={marks}
                            defaultValue={3}
                            getAriaValueText={sliderText}
                            aria-label="Severity Grade"
                            valueLabelDisplay="off"
                        />
                    </FormContainer2Columns>
                    <FooterContainer>
                        <SubmitButton>Save</SubmitButton>
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
