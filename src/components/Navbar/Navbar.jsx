import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Select from 'react-select';
import './Navbar.scss'

function Navbar(props) {
    const { verifiedList, input, setInput, setSelect} = props;
    
    const options = [
        { value: false, label: 'Clear' },
        { value: verifiedList, label: 'Job Ready' },
        
      ]
      
    const handleSearch = (event) => {
        setInput(event.target.value)      
    }

    const handleSelect = (selectedOption) => {
        setSelect(selectedOption.value)
    }; 

    return (
        <div className="navbar">
            <form className="navbar__form">
                <Select options={options} placeholder='Filter Users' onChange={handleSelect}
                styles={{
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
                }} />
                <div className="navbar__searchbox">
                    <input type="text" className="navbar__input" placeholder="Search Users" value={input} onChange={handleSearch}/>
                    <button className="navbar__button" >
                        <FaMagnifyingGlass className="navbar__search" />
                    </button>
                </div>
            </form>     
            <section className='navbar__profile'>
                <p className='navbar__welcome'>Welcome Back</p>
                <CgProfile className="navbar__icon"/>
            </section>
        </div>
    )
}


export default Navbar;