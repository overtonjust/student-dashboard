import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Select from 'react-select';
import './Navbar.scss'

function Navbar(props) {
    const { verifiedList, input, setInput, setSelect} = props;
    
    const options = [
        { value: false, label: 'Filter Users' },
        { value: verifiedList, label: 'Job Ready' },
        { value: [], label: 'Vanilla' }
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
                <Select options={options} placeholder='Filter Users' onChange={handleSelect} />
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