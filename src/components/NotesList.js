import Note from './Note';

const NotesList = () => {

    return (

        <div className="notes-list">
            <div className='row'>
                <div className='col'>
                    <Note /> 
                </div>   
                <div className='col'>
                    <Note /> 
                </div>   
                <div className='col'>
                    <Note /> 
                </div>     
            </div>

            <div className='row'>
                <div className='col'>
                    <Note /> 
                </div>   
                <div className='col'>
                    <Note /> 
                </div>   
                <div className='col'>
                    <Note /> 
                </div>     
            </div>
        </div>
    )
}

export default NotesList;