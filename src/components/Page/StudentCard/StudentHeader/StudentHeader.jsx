import { useState } from "react";
import './StudentHeader.scss'


function StudentHeader(props) {
    const {src , name, verified, username, dob, index, state, setState} = props;


    function formatName(obj) {
        const firstName = obj.names.preferredName;
        const middleInitial = obj.names.middleName.charAt(0);
        const lastName = obj.names.surname;
    
        return `${firstName} ${middleInitial}. ${lastName}`
    }
    
    function formateDate(string) {
        const date = new Date(string)
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
    
        return date.toLocaleDateString('en-us', options)
    }


    return (
        <>
            <div className="student__header card-head">
                <img className='card-head__img' src={src} alt={formatName(name)} />
                <div className="card-head__info">
                    <div className="card-head__head">
                        <p className='card-head__name'>{formatName(name)}</p>
                        <p className='card-head__verified'>{verified ? 'On track to graduate' : ''}</p>
                    </div>
                    <p className='card-head__email'>{username}</p>
                    <p className='card-head__birthday'><span className='card-head__highlight'>Birthday: </span>{formateDate(dob)}</p>
                    <button onClick={() => state === index ? setState(-1) : setState(index)} className='card-head__more'>{state === index ? 'Show Less... ' : 'Show More...'}</button>
                </div>
            </div>
        </>
    )
}

export default StudentHeader;