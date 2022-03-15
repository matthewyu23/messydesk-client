import Note from './Note';

const NotesList = (props) => {

    return (

        <div className="notes-list">
            <div className='row'>
                <div className='col-lg-4'>
                    <Note noteId='0' socket={props.socket} quill={props.quill0} setQuill={props.setQuill0}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='1' socket={props.socket} quill={props.quill1} setQuill={props.setQuill1}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='2' socket={props.socket} quill={props.quill2} setQuill={props.setQuill2}/> 
                </div>     
            </div>

            <div className='row'>
                <div className='col-lg-4'>
                    <Note noteId='3' socket={props.socket} quill={props.quill3} setQuill={props.setQuill3}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='4' socket={props.socket} quill={props.quill4} setQuill={props.setQuill4}/> 
                </div>   
                <div className='col-lg-4'>
                    <Note noteId='5' socket={props.socket} quill={props.quill5} setQuill={props.setQuill5}/> 
                </div>     
            </div>
        </div>
    )
}

export default NotesList;