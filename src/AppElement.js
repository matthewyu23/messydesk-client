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

import {useNavigate} from 'react-router-dom';
export default function AppElement() {

 



    const [tableCode, setTableCode] = useState("0");
    const {tableCode: tableId} = useParams();
    const [socket, setSocket] = useState();
    const [quill0, setQuill0] = useState();
    const [quill1, setQuill1] = useState();
    const [quill2, setQuill2] = useState();
    const [quill3, setQuill3] = useState();
    const [quill4, setQuill4] = useState();
    const [quill5, setQuill5] = useState();
    console.log("haha" + tableId)







  
    useEffect(() => {
        if (socket == null || quill0 == null || quill1 == null || quill2 == null || quill3 == null || quill4 == null || quill5 == null) return
        const interval = setInterval(() => {
            socket.emit('save-table', [quill0.getContents(), quill1.getContents(), quill2.getContents(), quill3.getContents(), quill4.getContents(), quill5.getContents()]);
        }, 2000);
        return () => clearInterval(interval);
    }, [socket, quill0, quill1, quill2, quill3, quill4, quill5]);


    useEffect(() => {
        if (tableId == undefined || socket == null || quill0 == null || quill1 == null || quill2 == null || quill3 == null || quill4 == null || quill5 == null) return
        
        // add current note to local storage
        var recentTables = (localStorage.getItem("recentTables")) ? JSON.parse(localStorage.getItem("recentTables")) : ["No Recent Tables"];
        if (recentTables[0] == "No Recent Tables") {
          localStorage.setItem("recentTables", JSON.stringify([tableId]));
        } else {
          var newRecentTables = [tableId]
          for (var i = 0; i < recentTables.length; i++) {
            if (recentTables[i] != tableId) {
              newRecentTables.push(recentTables[i])
            }
          }

          localStorage.setItem("recentTables", JSON.stringify(newRecentTables));

        }
    
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

    
    const navigate = useNavigate()
    const joinTable = () => {
        navigate(`/table/${tableCode}`)
    }

    const createTable = (c) => {
      var newCode = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
      navigate("/table/" + newCode)
    }
    
  
  
    
  
    useEffect(() => {
      

      // use for dev
      const s = io('http://localhost:3001')


      // use for deployment
      // const s = io('https://messydesk.herokuapp.com/')

      setSocket(s);
      return () => {
        s.disconnect();
      }
    }, []);
  
    if (tableId == undefined) {
      return (

        <div className='container-fluid'>
        
        <MyModal show={true} createTable={createTable} tableCode={tableCode} joinTable={joinTable} setTableCode={setTableCode}/>
          <Navbar bg="none" expand={false}>
            
            <Container fluid>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />

              {/* <img src={messydesk} className='.img-thumbnail'/> */}
              <h1 className='messydesk'><span className='reddd'>Messy</span> <br></br>Desk</h1>
              {/* <h1 className='code'><span className='reddd'>Table code</span> <br></br>{tableId.substring(0, 3) + "-" + tableId.substring(3)}</h1> */}
            </Container>
          </Navbar>
        <NotesList socket={socket} quill0={quill0} quill1={quill1} quill2={quill2} quill3={quill3} quill4={quill4} quill5={quill5} setQuill0={setQuill0} setQuill1={setQuill1} setQuill2={setQuill2} setQuill3={setQuill3} setQuill4={setQuill4} setQuill5={setQuill5}/>
        
      </div>
    )
    }
    return (

        <div className='container-fluid'>
        
        <MyModal show={false} createTable={createTable} tableCode={tableCode} joinTable={joinTable} setTableCode={setTableCode}/>
          <Navbar bg="none" expand={false}>
            
            <Container fluid>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />

              {/* <img src={messydesk} className='.img-thumbnail'/> */}
              <h1 className='messydesk'><span className='reddd'>Messy</span> <br></br>Desk</h1>
              <h1 className='code'><span className='reddd'>Table code</span> <br></br>{tableId.substring(0, 3) + " " + tableId.substring(3)}</h1>

            </Container>
          </Navbar>
        <NotesList socket={socket} quill0={quill0} quill1={quill1} quill2={quill2} quill3={quill3} quill4={quill4} quill5={quill5} setQuill0={setQuill0} setQuill1={setQuill1} setQuill2={setQuill2} setQuill3={setQuill3} setQuill4={setQuill4} setQuill5={setQuill5}/>
        
      </div>
    )
}

