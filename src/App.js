import NotesList from './components/NotesList';
import messydesk from './messydesk.png';
import MyModal from './components/MyModal';
import { useState } from 'react';


const App = () => {

  var notes = (localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : ["", "", "", "", "", ""];
  const [modalShow, setModalShow] = useState(true);

  const saveToApp = (data) => {
      notes[data[0]] = data[1]
      localStorage.setItem("notes", JSON.stringify(notes)); 

  }
  return <div className='container-fluid'>
    <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    <img src={messydesk} className='.img-thumbnail'/>
    <NotesList saveToApp={saveToApp} notes={notes}/>
    
  </div>;
}

export default App;