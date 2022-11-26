import { MenuItem } from '@mui/material';
import styled, { css } from 'styled-components';
import { darkBlue, darkPurple } from '../../modules/theme';

export const Menu = styled.div`
    font-weight: bold;
    color: ${darkBlue};
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
        if (props.path === '/patients') {
            return css`
                color: ${darkPurple} !important;
            `;
        }
        if (props.path === '/exercises') {
            return css`
                color: ${darkPurple} !important;
            `;
        }
        if (props.path === '/goodReading') {
            return css`
                color: ${darkPurple} !important;
            `;
        }
    }}
`;
