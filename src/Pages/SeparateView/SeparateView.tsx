import {
    Container,
    LoggedContainer,
    RightContainer,
    RightContainerLogged,
} from '../../components/common/SeparateView.components';
// import { RightImage } from '../../Components/RightImage';

import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { DoctorMenu } from '../../components/DoctorMenu/DoctorMenu';
import { DoctorPatients } from '../DoctorPatients/DoctorPatients';
import { MedicationTable } from '../../components/MedicationTable/MedicationTable';
import { Exercises } from '../Exercises/PacientExercises';
import { SeePatient } from '../DoctorPatients/SeePatient';

import { PatientMenu } from '../../components/PatientMenu/PatientMenu';
import { RightImage } from '../../components/RightImage';
type SeparateViewWithFormProps = {
    form: string;
};

export const SeparateViewWithForm = (props: SeparateViewWithFormProps) => {
    const { form } = props;
    return (
        <Container>
            {form === 'Login' ? <Login /> : <Register />}
            <RightContainer>
                <RightImage />
            </RightContainer>
        </Container>
    );
};
type SeparateViewWithDoctorMenuProps = {
    view: string;
    id?: string;
};
export const SeparateViewWithDoctorMenu = (props: SeparateViewWithDoctorMenuProps) => {
    const { view } = props;
    return (
        <LoggedContainer>
            <DoctorMenu />
            <RightContainerLogged>
                {view === 'patients' && <DoctorPatients />}
                {view === 'addExercises' && <Exercises isPatient={false} />}
                {view === 'seePatient' && <SeePatient />}
            </RightContainerLogged>
        </LoggedContainer>
    );
};

export const SeparateViewWithMedicationTable = () => {
    return (
        <RightContainerLogged>
            <MedicationTable></MedicationTable>
        </RightContainerLogged>
    );
};
type SeparateViewWithPatientMenuProps = {
    view: string;
    diagnostic?: string;
};
export const SeparateViewWithPatientMenu = (props: SeparateViewWithPatientMenuProps) => {
    const { view } = props;
    return (
        <LoggedContainer>
            <PatientMenu />
            <RightContainerLogged>
                {view == 'exercises' && <Exercises isPatient={true} />}
                {/* {view == 'Me' && <SeePatient role="user" id={'7389'} />} */}
                {view == 'medication' && <MedicationTable />}
            </RightContainerLogged>
        </LoggedContainer>
    );
};
