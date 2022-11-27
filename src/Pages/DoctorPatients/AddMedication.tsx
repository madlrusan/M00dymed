import { Box, Checkbox, FormControlLabel, InputAdornment, InputLabel, MenuItem, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
    DiagnosticInput,
    FormContainer2Columns,
    ModalTitle,
    NameInput,
    SubmitButton,
} from '../../components/common/CredentialsForm.components';
import { AddBtn, FilterForm, FooterContainer } from '../../components/common/Doctors.components';
import { DiagnosticSeverityText } from '../../components/common/SeparateView.components';
import { grey } from '../../modules/theme';
import { AppwriteMedication } from '../../services/AppwriteMedication';
type AddMedicationProps = {
    email: string;
    diagnostic: string;
    severity: number;
};

export const AddMedication = (props: AddMedicationProps) => {
    const { diagnostic, severity, email } = props;
    const [openModal, setOpenModal] = useState(false);
    const [medication, setMedication] = useState('');
    const [everyday, setEveryday] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [hoursValue, setHoursValue] = useState('');
    const { addMedication } = AppwriteMedication();
    const save = async () => {
        await addMedication(medication, everyday, quantity, hoursValue, email);
        handleClose();
    };
    const handleOpen = () => setOpenModal(true);
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
    return (
        <div>
            <AddBtn sx={{ marginTop: '-200px' }} variant="contained" onClick={handleOpen}>
                Add Medication
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
                        <DiagnosticSeverityText>{diagnostic}</DiagnosticSeverityText> with severity grade{' '}
                        <DiagnosticSeverityText>{severityText}</DiagnosticSeverityText>
                    </ModalTitle>
                    <FormContainer2Columns>
                        <NameInput
                            id="outlined-required"
                            label="Medication Name"
                            variant="outlined"
                            required={true}
                            onChange={(e) => {
                                setMedication(e.target.value);
                            }}
                        />
                        <NameInput
                            id="outlined-required"
                            label="Quantity"
                            variant="outlined"
                            required={true}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">per take</InputAdornment>,
                            }}
                        />
                    </FormContainer2Columns>
                    <FormContainer2Columns>
                        <FormControlLabel
                            sx={{ color: `${grey}`, marginLeft: '2px' }}
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: `${grey}`,
                                        '&.Mui-checked': {
                                            color: `${grey}`,
                                        },
                                    }}
                                />
                            }
                            onChange={(e) => {
                                setEveryday(!everyday);
                            }}
                            label="Everyday"
                        />
                        <FilterForm>
                            <InputLabel>Hours to take the medication</InputLabel>
                            <DiagnosticInput
                                labelId="hours"
                                required={true}
                                id="hours"
                                // value={filterValue}
                                label="Hours to take the medication"
                                onChange={(e) => {
                                    setHoursValue(e.target.value);
                                }}
                                style={{ width: '250px' }}
                            >
                                {hours.map((hour) => {
                                    return <MenuItem value={hour.label}>{hour.label}</MenuItem>;
                                })}
                            </DiagnosticInput>
                        </FilterForm>
                    </FormContainer2Columns>
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
    width: 400,
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
