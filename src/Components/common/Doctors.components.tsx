import styled from 'styled-components';
import { Autocomplete, Button, Card, FormControl, TableHead } from '@mui/material';
import { darkPurple, grey, mediumPurple, pink, transparentPink } from '../../modules/theme';
export const CardContainer = styled(Card)`
    background-color: ${transparentPink} !important;
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
    div::after {
        /* border-color: ${pink}; */
        /* border-bottom: 1px solid ${pink} !important; */
        /* color: ${pink}; */
    }
    .Mui-focused {
        color: ${grey} !important;
        border: none !important;
        color: ${grey};
    }
    fieldset.MuiOutlinedInput-notchedOutline {
        color: ${grey} !important;
        border: 1px solid ${grey} !important;
        color: ${grey};
    }
`;

export const SearchInput = styled(Autocomplete)`
    width: 15%;
    div::after {
        /* border-color: ${pink}; */
        /* border-bottom: 1px solid ${pink} !important; */
        /* color: ${pink}; */
    }
    .Mui-focused {
        color: ${grey} !important;
        border: none !important;
        color: ${grey};
    }
    fieldset.MuiOutlinedInput-notchedOutline {
        color: ${grey} !important;
        border: 1px solid ${grey} !important;
        color: ${grey};
    }
`;

export const TableHeader = styled(TableHead)`
    .MuiTableCell-head {
        background-color: ${transparentPink} !important;
    }
`;
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;
`;
export const AddBtn = styled(Button)`
    background-color: ${darkPurple} !important;
    margin-top: 50px !important;
`;
