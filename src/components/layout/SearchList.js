import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { serviceList } from "../../serviceList";
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

    const categoryOrder = [
        'ΑΙ for Energy Networks (I-NET)',
        'AI for Distributed Energy Resources (I-DER)',
        'AI - Other Energy Efficiency & Non-Energy Domains (I-ENEF)',
        'General Analytic Tools',
        'Tools for ML Pipeline'
    ];

    const options = serviceList.flatMap((option) => {
        const categories = option.category.split(',').map(category => category.trim());
        return categories.map((category) => ({
            ...option,
            category, // Update the category to each individual category
        }));
    });

    const sortedOptions = options.sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.category);
        const indexB = categoryOrder.indexOf(b.category);
        return indexA - indexB;
    });





    return (
        <Autocomplete
            className={'searchBox'}
            id="grouped-demo"
            options={sortedOptions}
            groupBy={(option) => option.category}
            getOptionLabel={(option) => option.title}
            value={value}
            filterOptions={filterOptions}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            renderGroup={renderGroup}
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
