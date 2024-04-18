
import './CohortPanel.scss';



function CohortPanel(props) {
    const {children} = props;
 
    return (
        <>
            <div className="panel-box">             
               {children}
            </div>
        </>
    )
}

export default CohortPanel;