import NotesList from './components/NotesList';
import messydesk from './messydesk.png';
import MyModal from './components/MyModal';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const App = () => {

  var notes = (localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : ["", "", "", "", "", ""];
  const [modalShow, setModalShow] = useState(true);

  const saveToApp = (data) => {
      notes[data[0]] = data[1]
      localStorage.setItem("notes", JSON.stringify(notes)); 

  }

  const createTable = () => {
    setModalShow(false)
  }

  const joinTable = () => {
  }
  return <div className='container-fluid'>
    <MyModal show={modalShow} createTable={createTable} joinTable={joinTable}/>





    <Navbar bg="none" expand={false}>
      <Container fluid>
      {/* <img src={messydesk} className='.img-thumbnail'/> */}
      <h1 className='messydesk'><span className='reddd'>Messy</span> <br></br>Desk</h1>
        <h1 className='code'><span className='reddd'>Table code</span> <br></br>123-456</h1>
      </Container>
    </Navbar>





    <NotesList saveToApp={saveToApp} notes={notes}/>
    
  </div>;
}

export default App;