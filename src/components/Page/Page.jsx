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
                <StudentCard studentInfo={data} />
            </div>
        </>
    )
}



export default Page;