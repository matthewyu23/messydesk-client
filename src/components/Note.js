import "quill/dist/quill.snow.css";
import Quill from 'quill';
import {useEffect, useCallback, useState} from 'react';

const Note = (props) => {

    const saveToState = (event) => {
        const data = [props.noteId, event.target.value];
        props.saveToApp(data);
    }


    const wrapperRef = useCallback(wrapper => {
        console.log('ran')
        if (wrapper !== null) {
            wrapper.innerHTML = ""
            const editor = document.createElement('div');
            wrapper.append(editor);
            const q = new Quill('#editor' + props.noteId, { theme: 'snow' });
            
            q.disable()
            q.setText("Loading")
            props.setQuill(q);
        }
    }, []);
    
    useEffect(() => {
        // recieving changes
        if (props.quill == null || props.socket == null) return;
        const handler = (delta) => {
            if (delta[0] == props.noteId) {
                props.quill.updateContents(delta[1]);
            }
           

            
        }
        props.socket.on('recieve-changes', handler);
        return () => {
            props.socket.off('recieve-changes', handler);
        }
    }, [props.quill, props.socket]);


    useEffect(() => {
        // sending changes
        if (props.quill == null || props.socket == null) return;
        const handler = (delta, oldDelta, source) => {
            if (source !== 'user') return
            props.socket.emit('send-changes', [props.noteId, delta]);

            
        }
        props.quill.on('text-change', handler);
        return () => {
            props.quill.off('text-change', handler);
        }
    }, [props.quill, props.socket]);

    
    
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