import { MenuItem, Link } from '@mui/material';
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
    width: 100%;
`;

export const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
`;

export const StyledItem = styled(MenuItem)`
    width: 100%;
`;

export const RouteMenuItem = (props: any) => {
    const display = props.display
    const path = props.path
    return (
        <StyledItem>
            <Link href={path} underline="none">
                {display} 
            </Link>
        </StyledItem>
    )
}
