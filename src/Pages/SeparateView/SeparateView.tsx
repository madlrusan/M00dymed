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
import { Exercises } from '../Exercises/PacientExercises';
import { SeePatient } from '../DoctorPatients/SeePatient';
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
    const { view, id } = props;
    return (
        <LoggedContainer>
            <DoctorMenu />
            <RightContainerLogged>
                {view === 'patients' && <DoctorPatients />}
                {view === 'addExercises' && <Exercises isPatient={false} />}
                {view === 'seePatient' && id && <SeePatient />}
            </RightContainerLogged>
        </LoggedContainer>
    );
};

type SeparateViewWithPatientMenuProps = {
    view: string;
};
export const SeparateViewWithPatientMenu = (props: SeparateViewWithPatientMenuProps) => {
    const { view } = props;
    return (
        <LoggedContainer>
            <DoctorMenu />
            <RightContainerLogged>{view == 'Me' && <SeePatient />}</RightContainerLogged>
        </LoggedContainer>
    );
};
