import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import './Header.scss'


function Header (props) {
    const {children} = props;
    const [toggleButton,setToggleButton ] = useState(false);
    


    return (
        <>
            <div className="header">
                <p className="header__text">Student Dashboard</p>
                {children ?
                    <div className="header__dropdown-box">
                        <FontAwesomeIcon className='header__mobile' icon={faBars} onClick={() => setToggleButton(!toggleButton)}/>
                        {toggleButton &&
                            <div className="header__dropdown-menu">
                                {children}
                            </div>
                        }
                    </div>
                : ''}
            </div>
        </>
    ) 
}

export default Header;