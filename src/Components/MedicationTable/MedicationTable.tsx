import React from 'react';
import moment from 'moment';
import { CardContent } from '@mui/material';
import { CardContainerGrid } from './MedicationTable.components';

export const MedicationTable = () => {
    const today = moment().format('D.MM.YYYY');

    return (
        <CardContainerGrid>
            <CardContent>
                <div>{today}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>{moment().add(1, 'days').format('D.MM.YYYY')}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>{moment().add(2, 'days').format('D.MM.YYYY')}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>{moment().add(3, 'days').format('D.MM.YYYY')}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>{moment().add(4, 'days').format('D.MM.YYYY')}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>{moment().add(5, 'days').format('D.MM.YYYY')}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>{moment().add(6, 'days').format('D.MM.YYYY')}</div>
                <div>Medicament 1</div>
                <div>Medicament 2</div>
            </CardContent>
            <CardContent>
                <div>Notes</div>
                <div>lorem ipsum</div>
            </CardContent>
        </CardContainerGrid>
    );
};
