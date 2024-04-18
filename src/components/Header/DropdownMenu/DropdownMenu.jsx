// TEST COMPONENT DO NOT USE!

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

// TEST COMPONENT DO NOT USE!

function DropdownMenu () {
    const options = [
        {value: 0, label: 'test'},
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'}
    ]

    const icon = () => {
        <FontAwesomeIcon className='header__mobile' icon={faBars}/>
    };

    const dropDown = props => {
        return(
            <components.DropdownIndicator {...props}>
                {icon}
            </components.DropdownIndicator>
        )
    }
// TEST COMPONENT DO NOT USE!

    return (
        <Select 
                    components={{dropDown}}
                    options={options} 
                    />
    )
}

export default DropdownMenu;