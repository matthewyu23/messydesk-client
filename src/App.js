import NotesList from './components/NotesList';
import messydesk from './messydesk.png';


const App = () => {

  var notes = (localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : ["", "", "", "", "", ""];


  const saveToApp = (data) => {
      notes[data[0]] = data[1]
      localStorage.setItem("notes", JSON.stringify(notes)); 

  }
  return <div className='container-fluid'>
    <img src={messydesk} className='.img-thumbnail'/>
    <NotesList saveToApp={saveToApp} notes={notes}/>
    
  </div>;
}

export default App;