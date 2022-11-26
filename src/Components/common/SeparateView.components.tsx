import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
    justify-items: stretch;
    grid-template-columns: 1fr 1fr;
`;

export const LoggedContainer = styled.div`
    display: grid;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
    justify-items: stretch;
    grid-template-columns: 200px auto;
`;
export const RightContainer = styled.div`
    height: 100vh;
`;
export const RightContainerLogged = styled.div`
    background: linear-gradient(89.88deg, #81dae4 24.22%, #7a4e8f 99.42%);
    height: 100vh;
    width: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const DiagnosticSeverityText = styled.div`
    color: black;
    text-align: center;
    text-transform: uppercase;
`;
