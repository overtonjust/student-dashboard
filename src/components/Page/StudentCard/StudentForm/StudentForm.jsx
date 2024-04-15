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

        return `${commenter} says, "${comment}"`
    }


    return(
        <form onSubmit={handleSubmit} className='student__form oneOnOne'>
        <p className='oneOnOne__title'>1-on-1 Notes</p>
        <div className="oneOnOne__box">
            <div className="oneOnOne__name">
                <label htmlFor="name" className='oneOnOne__label' >Commenter Name: </label>
                <input type="text" id='name' className='oneOnOne__input' value={name} onChange={handleNameInput} />
            </div>
            <div className="oneOnOne__comment">
                <label htmlFor="comment" className='oneOnOne__label' >Comment: </label>
                <input type="text" id='comment' className='oneOnOne__input' value={comment} onChange={handleCommentInput} />
            </div>
            <input type="submit" className='oneOnOne__button' value='Add Note' />
        </div>
        <ul className='oneOnOne__list'>
            {notesList.map((note, index) => {
                return (
                    <li key={note.commenter + index} className='oneOnOne__list-item'>{formatNotes(note)}</li>
                )
            })}                                      

        </ul>
    </form> 
    )
}

export default StudentForm;