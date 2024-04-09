import './styles/Page.scss';
import data from '../data/data.json';

function Page() {
    return( 
        <>
            <div className="page">
                <header className='page__head'>
                    <p className='page__title'>All Students</p>
                    <p className='page__count'>Total Students: <span className='page__highlight'>{totalStudents(data)}</span></p>
                </header>
                {data.map(student => {
                    return (
                        <>
                            <article className='page__student'>
                                <img className='page__img' src={student.profilePhoto} alt={formatName(student)} />
                                <div className="page__info">
                                    <p className='page__name'>{formatName(student)}</p>
                                    <p className='page__email'>{student.username}</p>
                                    <p className='page__birthday'><span className='page__highlight'>Birthday: </span>{formateDate(student.dob)}</p>
                                </div>
                                    <button className='page__more'>Show More...</button>
                            </article>
                        </>
                    )
                })}
            </div>
        </>
    )
}

function totalStudents(arr) {
    let totalCount = 0;

    arr.forEach(student => {
        totalCount++;
    })

    return totalCount;
}

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

export default Page;