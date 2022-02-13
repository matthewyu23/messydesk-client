import Note from './Note';

const NotesList = () => {

    return (

        <div className="notes-list">
            <div className='row'>
                <div className='col-lg-4'>
                    <Note /> 
                </div>   
                <div className='col-lg-4'>
                    <Note /> 
                </div>   
                <div className='col-lg-4'>
                    <Note /> 
                </div>     
            </div>

            <div className='row'>
                <div className='col-lg-4'>
                    <Note /> 
                </div>   
                <div className='col-lg-4'>
                    <Note /> 
                </div>   
                <div className='col-lg-4'>
                    <Note /> 
                </div>     
            </div>
        </div>
    )
}

export default NotesList;