import { Box, Checkbox, FormControlLabel, InputAdornment, InputLabel, MenuItem, Modal, Table, TableBody, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
    DiagnosticInput,
    FormContainer2Columns,
    ModalTitle,
    NameInput,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import { AddBtn, FilterForm, FooterContainer, TableHeader } from '../../components/common/Doctors.components';
import { DiagnosticSeverityText } from '../../components/common/SeparateView.components';
import { grey } from '../../modules/theme';
import { AppwriteMedication } from '../../services/AppwriteMedication';
type EditMedicationProps = {
    email: string;
    diagnostic: string;
    severity: number;
};

export const EditMedication = (props: EditMedicationProps) => {
    const { diagnostic, severity, email } = props;
    const [openModal, setOpenModal] = useState(false);
    const [medication, setMedication] = useState('');
    const [content, setContent] = useState([]);

    const [everyday, setEveryday] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [hoursValue, setHoursValue] = useState('');
    const { addMedication, getMedicationForUser } = AppwriteMedication();
    const save = async () => {
        // getMedicationForUser(email).then((r) => setContent(r));
        // console.log(content)
    };
    const handleOpen = async () => {
        getMedicationForUser(email).then((r) => setContent(r));
        console.log(content)
        setOpenModal(true);
    };
    const handleClose = () => setOpenModal(false);

    const declareSeverity = (severity: number) => {
        switch (severity) {
            case 1:
                return 'Low';
            case 2:
                return 'Low to Medium';
            case 3:
                return 'Medium';
            case 4:
                return 'Medium to High';
            case 5:
                return 'High';
        }
    };
    const severityText = declareSeverity(severity);
    const [page, setPage] = React.useState(0);
    const cardsPerPage = 7;
    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };
    return (
        <div>
            <AddBtn sx={{ marginTop: '-200px' }} variant="contained" onClick={handleOpen}>
                View Medication
            </AddBtn>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalTitle>
                        Add Medication for
                        <DiagnosticSeverityText>{diagnostic}</DiagnosticSeverityText> 
                        with severity grade{' '}
                        <DiagnosticSeverityText>{severityText}</DiagnosticSeverityText>
                    </ModalTitle>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell> Name </TableCell>
                                <TableCell> Quantity </TableCell>
                                <TableCell> Hours </TableCell>
                                <TableCell>  </TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {(content).map((row) => (
                                <TableRow>
                                    <TableCell> {row.Name} </TableCell>
                                    <TableCell> {row.quantity} per take </TableCell>
                                    <TableCell> {row.hours} </TableCell>
                                    <TableCell><Delete row={row}>Delete</Delete></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <FooterContainer>
                        <SubmitButton onClick={save}>Save</SubmitButton>
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
    width: 600,
    bgcolor: `white`,
    borderRadius: '50px',
    boxShadow: 24,
    p: 4,
};

const hours = [
    {
        id: 'onlyMorning',
        label: '08:00',
    },
    {
        id: 'onlyEvening',
        label: '20:00',
    },
    {
        id: 'morningAndEvening',
        label: '08:00 and 20:00',
    },
    {
        id: 'onlyNoon',
        label: '12:00',
    },
    {
        id: 'specialCondition',
        label: 'when you feel you need it',
    },
];

export const Delete = (props: any) => {
    const row = props.row;
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const Delete = async () => {
        console.log(row.id);
    };
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
                        <SubmitButton sx={{ 'margin-right': '10vh !important' }} onClick={Delete}>
                            Delte
                        </SubmitButton>
                        <SubmitButton sx={{ 'margin-left': '10vh !important' }} onClick={handleClose}>
                            Cancel
                        </SubmitButton>
                    </FooterContainer>
                </Box>
            </Modal>
        </div>
    );
};

