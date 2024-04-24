import './Aside.scss';





function Aside (props) {
    const {children} = props;
    
    return (
        <div className="aside">
            <div className="aside__header">
                <p className='aside__text'>Pursuit</p>
            </div>
            {children}
        </div>
    )
}


export default Aside;