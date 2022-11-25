import styled from 'styled-components';
import { Autocomplete, Card, FormControl } from '@mui/material';
import { transparentPink } from '../../modules/theme';
export const CardContainer = styled(Card)`
    background-color: ${transparentPink};
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
`;

export const FilterForm = styled(FormControl)`
    width: 100%;
`;

export const SearchInput = styled(Autocomplete)`
    width: 15%;
`;
