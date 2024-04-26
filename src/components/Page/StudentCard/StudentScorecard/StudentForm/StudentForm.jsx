import { useState } from "react";
import './StudentForm.scss'

function StudentForm(props) {
    const { notes } = props;
    const [notesList, setNotesList] = useState(notes);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

       if(name !== '' && comment !== '') {
            setNotesList(prevNotesList => 
                [...prevNotesList, 
                    {   
                        commenter: name,
                        comment: comment
                    }
                ])
                
            setName('');
            setComment('');
        }
    }

    const handleNameInput = (event) => {
        setName(event.target.value)
    }

    const handleCommentInput = (event) => {
        setComment(event.target.value)
    }



    function formatNotes(noteObj) {
        const commenter = noteObj.commenter
        const comment = noteObj.comment    

        return  (
            <>
                <span className="student-form__author">{commenter} : </span><span className="student-form__quote">{comment}</span>
            </>
        )
    }


    return(
        <form onSubmit={handleSubmit} className='student-form'>
            <p className='student-form__title'>1-on-1 Notes </p>
            <p className="student-form__total">Total notes: <span className="student-form__total-num">{notesList.length}</span></p>
            <div className="student-form__box">
                <div className="student-form__name">
                    <label htmlFor="name" className='student-form__label' >Instructor Name: </label>
                    <input type="text" id='name' className='student-form__input' value={name} onChange={handleNameInput} />
                </div>
                <div className="student-form__comment">
                    <label htmlFor="comment" className='student-form__label' >Comment: </label>
                    <input type="text" id='comment' className='student-form__input' value={comment} onChange={handleCommentInput} />
                </div>
                <div className="student-form__submit-holder">
                    <input type="submit" className='student-form__button' value='Add Note' />
                </div>
            </div>
            <ul className='student-form__list'>
                {notesList.map((note, index) => {
                    return (
                        <li key={note.commenter + index} className='student-form__list-item'>{formatNotes(note)}</li>
                    )
                })}                                      

            </ul>
        </form> 
    )
}

export default StudentForm;