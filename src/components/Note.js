

const Note = (props) => {

    const saveToState = (event) => {
        const data = [props.noteId, event.target.value];
        props.saveToApp(data);
    }
    console.log(props.notes)

    return (
        <div className="note">
            <div className="card mt-4 shadow-sm">
                <div className="card-body">
                    <div className="form-group">
                        <textarea className="form-control rounded-0 border-0 " id="exampleFormControlTextarea1" rows="15" placeholder="✏️  Write something..." onChange={saveToState} defaultValue={props.notes[props.noteId]}></textarea>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Note;