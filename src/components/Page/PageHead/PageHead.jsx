import Select from 'react-select';
import './PageHead.scss'


function PageHead(props) {
    const {total , activeCohort, dropdownOption} = props

    const options = [
        { value: 'ascending', label: 'Name (A-z)' },
        { value: 'descending', label: 'Name (Z-a)' },
        { value: 'ascendingPoints', label: 'Codewars (↑)' },
        { value: 'descendingPoints', label: 'Codewars (↓)' }
    ]

    const handleDropdown = (selectedOption) => {
        dropdownOption(selectedOption.value)
    }

    return (
        <header className='page__head page-header'>
            <p className='page-header__title'>{activeCohort ? activeCohort.split(/(\d+)/).join(' ') : 'All Students'}
            <span className='page-header__highlight'> ({total})</span></p>
            <Select options={options} placeholder='Sort by' onChange={handleDropdown}   styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '2em',
                        width: '10em',
                        height: '2em',
                        backgroundColor: '#e7ecef',
                        boxShadow: '0 0 .4em #8b8c89',
                        border: 'none',             
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: '#274c77',
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: '#e7ecef',
                        color: '#274c77',
                        boxShadow: '0 0 .4em #8b8c89',
                    }),
                    option: (base) => ({
                        ...base,
                        cursor: 'pointer',
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: '#274c77',
                        cursor: 'pointer', 
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: '#274c77',
                    })
                }}  />
        </header>
    )
}

export default PageHead;