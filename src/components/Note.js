import "quill/dist/quill.snow.css";
import Quill from 'quill';
import {useEffect, useCallback} from 'react';

const Note = (props) => {

    const saveToState = (event) => {
        const data = [props.noteId, event.target.value];
        props.saveToApp(data);
    }

    const wrapperRef = useCallback(wrapper => {
        if (wrapper !== null) {
            wrapper.innerHTML = ""
            const editor = document.createElement('div');
            wrapper.append(editor);
            new Quill('#editor' + props.noteId, { theme: 'snow' });
        }
    }, []);
    
   
    
    return (
        <div className="note">
            <div className="card mt-4 shadow-sm">
                <div className="card-body">
                    <div className="form-group">
                        <div id={'editor' + props.noteId} className='editor' ref={wrapperRef}></div>
                        {/* <textarea className="form-control rounded-0 border-0 " id="exampleFormControlTextarea1" rows="15" placeholder="✏️  Write something..." onChange={saveToState} defaultValue={props.notes[props.noteId]}></textarea> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Note;