import { useState } from 'react';
import PageHead from './PageHead/PageHead';
import StudentCard from './StudentCard/StudentCard';
import './Page.scss';


function Page(props) {
    const {data, selectedCohort } = props;
    const total = data.length;

    return( 
        <>
            <div className="page">
                <PageHead total={total} activeCohort={selectedCohort} />
                <div className="page__holder">
                    <StudentCard studentInfo={data} />
                </div>
            </div>
        </>
    )
}



export default Page;