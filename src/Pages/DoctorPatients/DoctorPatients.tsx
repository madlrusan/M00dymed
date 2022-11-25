import {
    Autocomplete,
    CardContent,
    FormControl,
    Icon,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { CardContainer, FilterForm, HeaderContainer, SearchInput } from '../../components/common/Doctors.components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export const DoctorPatients = () => {
    const [filterValue, setFilterValue] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setFilterValue(event.target.value);
    };
    return (
        <CardContainer>
            <CardContent>
                <HeaderContainer>
                    <SearchInput
                        id="free-solo-demo"
                        freeSolo
                        options={[]}
                        renderInput={(params) => <TextField {...params} label="Search patients" />}
                    />
                    {/* filter */}
                    <div>
                        <FilterForm sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel>Filter by Diagnostics</InputLabel>
                            <Select
                                labelId="filter-diagnostics"
                                id="filter-diagnostics"
                                value={filterValue}
                                label="Filter by Diagnostics"
                                onChange={handleChange}
                            >
                                {diagnostics.map((diagnostic) => {
                                    return <MenuItem value={diagnostic.id}>{diagnostic.label}</MenuItem>;
                                })}
                            </Select>
                        </FilterForm>
                    </div>
                </HeaderContainer>
            </CardContent>
        </CardContainer>
    );
};

const diagnostics = [
    {
        id: 1,
        label: 'depression',
    },
    {
        id: 2,
        label: 'anxiety',
    },
];
