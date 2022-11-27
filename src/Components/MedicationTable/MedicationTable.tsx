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
    }, []);
    const time = [
        today + ' - Today',
        moment().add(1, 'days').format('D.MM.YYYY'),
        moment().add(2, 'days').format('D.MM.YYYY'),
        moment().add(3, 'days').format('D.MM.YYYY'),
        moment().add(4, 'days').format('D.MM.YYYY'),
        moment().add(5, 'days').format('D.MM.YYYY'),
        moment().add(6, 'days').format('D.MM.YYYY'),
    ];
    return (
        <ContentGrid>
            <TitleCard> Your Medication Schedule </TitleCard>
            <CardContainerGrid>
                {time.map((day) => (
                    <CardContentDay>
                        <DayHighlight>{day}</DayHighlight>
                        {medication.map(
                            (e) =>
                                (e.everyday || day === today + ' - Today') && (
                                    <div>
                                        {e.Name}, Hour:{e.hours}
                                    </div>
                                ),
                        )}
                    </CardContentDay>
                ))}
            </CardContainerGrid>
        </ContentGrid>
    );
};
