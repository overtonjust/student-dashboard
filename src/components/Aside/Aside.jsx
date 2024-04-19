import './Aside.scss';
import CohortPanel from '../CohortPanel/CohortPanel';




function Aside () {
    return (
        <div className="aside">
            <div className="aside__header">
                <p className='aside__text'>Pursuit</p>
            </div>
            <CohortPanel />
        </div>
    )
}


export default Aside;