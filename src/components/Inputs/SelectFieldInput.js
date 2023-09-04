import React from 'react';
import Select from 'react-select';

function SelectFieldInput(props) {
    return (
        <Select
            options={props.options}
            value={props.value}
            isMulti
            onChange={props.onChange}
            isOptionDisabled={props.isOptionDisabled}
            placeholder={props.placeholder}
        />
    )
}

export default SelectFieldInput