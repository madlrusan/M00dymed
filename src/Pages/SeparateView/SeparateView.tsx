import { Container, RightContainer } from '../../components/common/SeparateView.components';
import { RightImage } from '../.././components/RightImage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
type SeparateViewWithFormProps = {
    form: string;
};
export const SeparateViewWithViewProps = (props: SeparateViewWithFormProps) => {
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
