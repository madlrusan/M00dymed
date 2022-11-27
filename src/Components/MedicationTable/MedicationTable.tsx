import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CardContainerGrid, CardContentDay, DayHighlight } from './MedicationTable.components';
import styled from '@emotion/styled';
import { transparentWhite } from '../../modules/theme';
import { AppwriteMedication } from '../../services/AppwriteMedication';

export const ContentGrid = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 10vh auto;
`;

export const TitleCard = styled.div`
    height: 100%;
    padding: 3vh;
    margin-top: 2vh;
    font-size: 3vh;
    font-weight: bold;
    background-color: none;
`;

export const MedicationTable = () => {
    const today = moment().format('D.MM.YYYY');

    const { getMedicationForUser } = AppwriteMedication();
    const [medication, setMedication] = useState();
    useEffect(() => {
        const funct = async () => {
            const email = window.localStorage.getItem('email');
            const value = await getMedicationForUser(email);
            return value;
        };
        funct().then((r) => setMedication(r));
        console.log(medication);
    }, []);
    return (
        <ContentGrid>
            <TitleCard> Your Medication Schedule </TitleCard>
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
            </CardContainerGrid>
        </ContentGrid>
    );
};
