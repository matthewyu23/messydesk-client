import Note from './Note';

const NotesList = (props) => {

    return (

        <div className="notes-list">
            <div className='row'>
                <div className='col-lg-4'>
                    <Note noteId='0' saveToApp={props.saveToApp} notes={props.notes} socket={props.socket}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='1' saveToApp={props.saveToApp} notes={props.notes} socket={props.socket}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='2' saveToApp={props.saveToApp} notes={props.notes} socket={props.socket}/> 
                </div>     
            </div>

            <div className='row'>
                <div className='col-lg-4'>
                    <Note noteId='3' saveToApp={props.saveToApp} notes={props.notes} socket={props.socket}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='4' saveToApp={props.saveToApp} notes={props.notes} socket={props.socket}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='5' saveToApp={props.saveToApp} notes={props.notes} socket={props.socket}/> 
                </div>     
            </div>
        </div>
    )
}

export default NotesList;