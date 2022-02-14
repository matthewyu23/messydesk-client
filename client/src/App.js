import NotesList from './components/NotesList';
import messydesk from './messydesk.png';
import MyModal from './components/MyModal';
import { useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {io} from 'socket.io-client';



const App = () => {

  var notes = (localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : ["", "", "", "", "", ""];
  const [modalShow, setModalShow] = useState(true);
  const [tableCode, setTableCode] = useState("000000");

  const saveToApp = (data) => {
      notes[data[0]] = data[1]
      localStorage.setItem("notes", JSON.stringify(notes)); 

  }

  const createTable = () => {
    setModalShow(false)

    var tableCode = ""
    for (var i = 0; i < 6; i++) {
      tableCode += Math.floor(Math.random() * 10)
    }
    console.log(tableCode);
    setTableCode(tableCode)

  }

  const joinTable = () => {
  }


  useEffect(() => {
    const socket = io('http://localhost:3001');

    return () => {
      socket.disconnect();
    }
  });




  return <div className='container-fluid'>
    <MyModal show={modalShow} createTable={createTable} joinTable={joinTable}/>





    <Navbar bg="none" expand={false}>
      <Container fluid>
      {/* <img src={messydesk} className='.img-thumbnail'/> */}
      <h1 className='messydesk'><span className='reddd'>Messy</span> <br></br>Desk</h1>
        <h1 className='code'><span className='reddd'>Table code</span> <br></br>{tableCode.substring(0, 3) + "-" + tableCode.substring(3)}</h1>
      </Container>
    </Navbar>





    <NotesList saveToApp={saveToApp} notes={notes}/>
    
  </div>;
}

export default App;