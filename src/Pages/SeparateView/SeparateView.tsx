import { Container, RightContainer, RightContainerLogged } from '../../components/common/SeparateView.components';
import { RightImage } from '../.././components/RightImage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { DoctorMenu } from '../../components/DoctorMenu/DoctorMenu';
import { DoctorPatients } from '../DoctorPatients/DoctorPatients';
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
        <Container>
            <DoctorMenu />
            <RightContainerLogged>
                <DoctorPatients></DoctorPatients>
            </RightContainerLogged>
        </Container>
    );
};
