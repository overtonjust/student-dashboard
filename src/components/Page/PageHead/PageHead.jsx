import './PageHead.scss'


function PageHead(props) {
    const {total , activeCohort} = props

    return (
        <header className='page__head page-header'>
            <p className='page-header__title'>{activeCohort ? activeCohort.split(/(\d+)/).join(' ') : 'All Students'}
            <span className='page-header__highlight'> ({total})</span></p>
        </header>
    )
}

export default PageHead;