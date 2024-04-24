import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

import './Navbar.scss'

function Navbar(props) {
    const {currData, updatedData, search, setSearch} = props;
    const handleSearch = (event) => {
        console.log(event.value)
    }

    return (
        <div className="navbar">
            <form action="" className="navbar__form">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                </select>
                <div className="navbar__searchbox">
                    <input type="text" className="navbar__input" placeholder="Search Users" />
                    <button className="navbar__button" onSubmit={() => handleSearch}>
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