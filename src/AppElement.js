import NotesList from './components/NotesList';
import messydesk from './messydesk.png';
import MyModal from './components/MyModal';
import { useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {io} from 'socket.io-client';
import Quill from 'quill';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function AppElement() {

    var notes = (localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : ["", "", "", "", "", ""];
    const [modalShow, setModalShow] = useState(true);
    const [tableCode, setTableCode] = useState("000000");
    const {tableCode: tableId} = useParams();
    const [socket, setSocket] = useState();
    const [quill0, setQuill0] = useState();
    const [quill1, setQuill1] = useState();
    const [quill2, setQuill2] = useState();
    const [quill3, setQuill3] = useState();
    const [quill4, setQuill4] = useState();
    const [quill5, setQuill5] = useState();
    console.log(tableId)


    const saveToApp = (data) => {
        notes[data[0]] = data[1]
        localStorage.setItem("notes", JSON.stringify(notes)); 
  
    }
  
    useEffect(() => {
        if (socket == null || quill0 == null || quill1 == null || quill2 == null || quill3 == null || quill4 == null || quill5 == null) return
        socket.once("load-table", (table) => {
            console.log(table)
            quill0.setContents(table[0]);
            quill1.setContents(table[1]);
            quill2.setContents(table[2]);
            quill3.setContents(table[3]);
            quill4.setContents(table[4]);
            quill5.setContents(table[5]);
            quill0.enable();
            quill1.enable();
            quill2.enable();
            quill3.enable();
            quill4.enable();
            quill5.enable();

        })
        socket.emit('get-table', tableId);
    }, [socket, tableId, quill0, quill1, quill2, quill3, quill4, quill5]);

    
  
    const joinTable = (c) => {
        return <Navigate to={"/table/" + c} />
    }
  
  
    
  
    useEffect(() => {
      
      const s = io('http://localhost:3001')
      setSocket(s);
      return () => {
        s.disconnect();
      }
    }, []);
  
    return (

        <div className='container-fluid'>
    
        {/* <MyModal show={modalShow} createTable={createTable} joinTable={joinTable}/> */}
          <Navbar bg="none" expand={false}>
            <Container fluid>
              {/* <img src={messydesk} className='.img-thumbnail'/> */}
              <h1 className='messydesk'><span className='reddd'>Messy</span> <br></br>Desk</h1>
              <h1 className='code'><span className='reddd'>Table code</span> <br></br>{tableId.substring(0, 3) + "-" + tableId.substring(3)}</h1>
            </Container>
          </Navbar>
        <NotesList saveToApp={saveToApp} notes={notes} socket={socket} quill0={quill0} quill1={quill1} quill2={quill2} quill3={quill3} quill4={quill4} quill5={quill5} setQuill0={setQuill0} setQuill1={setQuill1} setQuill2={setQuill2} setQuill3={setQuill3} setQuill4={setQuill4} setQuill5={setQuill5}/>
        
      </div>
    )
}

