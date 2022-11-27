import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
    justify-items: stretch;
    margin: 0;
    grid-template-columns: 35vw auto;
`;

export const LoggedContainer = styled.div`
    display: grid;
    align-content: stretch;
    align-items: center;
    justify-items: stretch;
    grid-template-columns: 30vw auto;
`;
export const RightContainer = styled.div`
    height: 120vh;
    margin-top: -20vh;
`;
export const RightContainerLogged = styled.div`
    background: linear-gradient(89.88deg, #81dae4 24.22%, #7a4e8f 99.42%);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: both;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const DiagnosticSeverityText = styled.div`
    color: black;
    text-align: center;
    text-transform: uppercase;
`;
