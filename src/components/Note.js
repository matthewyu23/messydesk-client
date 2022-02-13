import { useState } from 'react';

const Note = () => {
    const [noteContent, setNote] = useState('');


    const saveToState = (event) => {
        console.log(event.target.value);
        setNote(event.target.value);
    }
    return (
        <div className="note">
            <div className="card mt-4 shadow-sm">
                <div className="card-body">
                    <div className="form-group">
                        <textarea className="form-control rounded-0 border-0 " id="exampleFormControlTextarea1" rows="15" placeholder="✏️  Write something..." onChange={saveToState} value={noteContent}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note;