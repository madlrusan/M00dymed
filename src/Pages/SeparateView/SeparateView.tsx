import {
    Container,
    LoggedContainer,
    RightContainer,
    RightContainerLogged,
} from '../../components/common/SeparateView.components';
import { RightImage } from '../../Components/RightImage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { DoctorMenu } from '../../components/DoctorMenu/DoctorMenu';
import { DoctorPatients } from '../DoctorPatients/DoctorPatients';
import { MedicationTable } from '../../components/MedicationTable/MedicationTable';
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

export const SeparateViewWithDoctorMenu = () => {
    return (
        <LoggedContainer>
            <DoctorMenu />
            <RightContainerLogged>
                <DoctorPatients></DoctorPatients>
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
