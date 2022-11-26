import { MenuItem } from '@mui/material';
import styled, { css } from 'styled-components';

export const Menu = styled.div`
    color: #7eb1d7;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: center;
    align-items: flex-start;
`;

export const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
`;

export const StyledItem = styled(MenuItem)<{ className?: string; path?: string }>`
    ${(props) => {
        if (props.className === 'clicked') {
            return css`
                color: red !important;
            `;
        }
        if (props.path === '/patients') {
            return css`
                color: red !important;
            `;
        }
    }}
`;
