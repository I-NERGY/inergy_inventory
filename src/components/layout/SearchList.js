import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { serviceList } from "../../serviceList";

const options = serviceList.map((option) => {
    const category = option.category;
    const keywords = option.keywords;
    return {
        category,
        keywords,
        ...option,
    };
});

const SearchField = () => {
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (value) {
            window.location.href = `/service/${value.id}`;
        }
    }, [value])

    const filterOptions = createFilterOptions({
        matchFrom: 'any',
        stringify: (option) => option.title + option.category + option.keywords,
    });

    const renderGroup = (params) => [
        <div key={params.key} style={{ color: 'orange', padding: '8px 16px' }}>
            <span style={{ fontWeight: 'bold', fontSize: '16px' }} className="headingGradient">{params.group}</span>
        </div>,
        ...params.children.map((option) => (
            <div key={option.id} style={{ paddingLeft: '14px', paddingRight: '16px' }}>
                {option}
            </div>
        ))
    ];


    return (
        <Autocomplete
            className={'searchBox'}
            id="grouped-demo"
            options={options.sort((a, b) => -b.category.localeCompare(a.category))}
            groupBy={(option) => option.category}
            getOptionLabel={(option) => option.title}
            value={value}
            filterOptions={filterOptions}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            renderGroup={renderGroup} // Apply custom rendering for group labels
            sx={{
                input: {
                    color: 'white',
                    fontWeight: 200,
                    '&::placeholder': {
                        color: 'white',
                        opacity: 0.7
                    }
                },
                label: {
                    color: 'white',
                    fontWeight: 200
                },
                py: 1,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
                '& .MuiAutocomplete-clearIndicator': {
                    color: 'white'
                },
                '& .MuiAutocomplete-popupIndicator': {
                    color: 'white'
                },
                '& .MuiAutocomplete-option': {
                    color: 'white',
                }
            }}
            renderInput={(params) => <TextField
                {...params} InputLabelProps={{ style: { color: 'white' } }} label="Search for a service..." />}
        />
    );
}

export default SearchField;
