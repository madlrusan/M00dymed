import {
    LogoContainer,
    NameContainer,
    NameInput,
    StyledForm,
} from '../../components/common/CredentialsForm.components';

export const Register = () => {
    return (
        <StyledForm>
            <LogoContainer>LOGO</LogoContainer>
            <NameContainer>
                <NameInput id="filled-required" label="First Name" variant="filled" />
                <NameInput id="filled-required" label="Last Name" variant="filled" />
            </NameContainer>
        </StyledForm>
    );
};
