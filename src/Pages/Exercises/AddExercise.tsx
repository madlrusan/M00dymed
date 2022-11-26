import { Box, InputLabel, MenuItem, Modal, Slider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {
    DiagnosticInput,
    ModalTitle,
    NameInput,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import { AddBtn, FilterForm, FooterContainer } from '../../components/common/Doctors.components.tsx';

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

export const EditExercise = (props: any) => {
    const row = props.row;
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <MenuItem onClick={handleOpen}>Edit</MenuItem>
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
                        defaultValue={row.title}
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
                        defaultValue={row.media}
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
                            defaultValue={row.diagnostic}
                            placeholder={row.diagnostic}
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
                        defaultValue={row.description}
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

export const DeleteExercise = (props: any) => {
    const row = props.row;
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <MenuItem onClick={handleOpen}>Delete</MenuItem>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalTitle>Are you sure?</ModalTitle>

                    <FooterContainer>
                        <SubmitButton>Delte</SubmitButton>
                        <SubmitButton onClick={handleClose}>Cancel</SubmitButton>
                    </FooterContainer>
                </Box>
            </Modal>
        </div>
    );
};
