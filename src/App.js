import NotesList from './components/NotesList';
import messydesk from './messydesk.png';
// import { useState } from 'react';

const App = () => {

  var notes = (localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : ["", "", "", "", "", ""];


  // const [noteContent, setNote] = useState(localNote);

  const saveToApp = (data) => {
      // setNote(event.target.value);
      console.log(data)

      notes[data[0]] = data[1]
      localStorage.setItem("notes", JSON.stringify(notes)); 

  }
  return <div className='container-fluid'>
    <img src={messydesk} className='.img-thumbnail'/>
    <NotesList saveToApp={saveToApp} notes={notes}/>
    
  </div>;
}

export default App;