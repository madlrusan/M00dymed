import { Box, InputLabel, MenuItem, Modal, Slider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {
    DiagnosticInput,
    ModalTitle,
    NameInput,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import { AddBtn, FilterForm, FooterContainer } from '../../components/common/Doctors.components.tsx';
export const AddExercise = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
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
                    <ModalTitle>Add Exercise</ModalTitle>
                        <NameInput
                            id="outlined-required"
                            label="Title"
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
                            label="Media URL"
                            variant="outlined"
                            onChange={(e) => {
                                // setRegisterUser({
                                //     ...registerUser,
                                //     firstName: e.target.value,
                                // });
                            }}
                        />
                        <FilterForm>
                            <InputLabel>Diagnostic</InputLabel>
                            <DiagnosticInput
                                labelId="diagnostics"
                                id="diagnostics"
                                // value={filterValue}
                                label="Diagnostics"
                                // onChange={handleChangeFilter}
                                style={{ width: '100%' }}
                            >
                                {diagnostics.map((diagnostic) => {
                                    return <MenuItem value={diagnostic.id}>{diagnostic.label}</MenuItem>;
                                })}
                            </DiagnosticInput>
                        </FilterForm>
                        <NameInput
                            id="outlined-required"
                            label="Description"
                            variant="outlined"
                            multiline
                            maxRows={10}
                            minRows={3}
                            onChange={(e) => {
                                // setRegisterUser({
                                //     ...registerUser,
                                //     lastName: e.target.value,
                                // });
                            }}
                        />
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
