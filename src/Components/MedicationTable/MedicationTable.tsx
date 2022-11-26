import React from 'react';
import moment from 'moment';
import { CardContent } from '@mui/material';
import { CardContainerGrid, CardContentDay, DayHighlight } from './MedicationTable.components';

export const MedicationTable = () => {
    const today = moment().format('D.MM.YYYY');

    return (
        <CardContainerGrid>
            <CardContentDay>
                <DayHighlight>{today + ' - Today'}</DayHighlight>
                <div style={{ maxHeight: '100px', overflowY: 'scroll' }}>
                    <div>Medicament 1</div>
                    <div>Medicament 2</div>
                    <div>Medicament 1</div>
                    <div>Medicament 2</div>
                    <div>Medicament 1</div>
                    <div>Medicament 2</div>
                    <div>Medicament 1</div>
                    <div>Medicament 2</div>
                </div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>{moment().add(1, 'days').format('D.MM.YYYY')}</DayHighlight>
                <div>Medicament 1 - 2 pills /take - when you feel you need it</div>
                <div>Medicament 2</div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>{moment().add(2, 'days').format('D.MM.YYYY')}</DayHighlight>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>{moment().add(3, 'days').format('D.MM.YYYY')}</DayHighlight>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>{moment().add(4, 'days').format('D.MM.YYYY')}</DayHighlight>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>{moment().add(5, 'days').format('D.MM.YYYY')}</DayHighlight>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>{moment().add(6, 'days').format('D.MM.YYYY')}</DayHighlight>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContentDay>
            <CardContentDay>
                <DayHighlight>Notes</DayHighlight>
                <div>lorem ipsum</div>
            </CardContentDay>
        </CardContainerGrid>
    );
};
