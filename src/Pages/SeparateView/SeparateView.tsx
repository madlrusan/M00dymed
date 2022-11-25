import { Container } from '../../components/common/SeparateView.components';
import { RightImage } from '../../Components/RightImage';
import { Login } from '../Login/Login';
import rightImage from '../../../assets/rightImage.jpg';

export const SeparateView = () => {
    return (
        <Container>
            <Login />
            <div style={{ backgroundImage: `url(${rightImage})`, width: '100%', height: '100%' }}>kbslfnl</div>
            {/* <RightImage /> */}
        </Container>
    );
};
