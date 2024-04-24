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
            <Select options={options} placeholder='Sort by' onChange={handleDropdown}  />
        </header>
    )
}

export default PageHead;