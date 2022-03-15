
import AppElement from './AppElement';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate, 
  useNavigate,
  useParams
} from "react-router-dom";



import {useState, useEffect} from 'react';



const App = () => {
  

  // const {tableCode : tableId, show: b} = useParams();
  // // console.log("new" + a);
  // console.log("new" + b);


  // extract params from url

  // console.log("new:" + show);

  return (
  <Router>
    <Routes> 
      <Route path="/" element={<AppElement/>} />
      <Route path="/table/:tableCode" element={<AppElement/>}>


      </Route>

    </Routes>
    

  </Router>
  
  
  
  
  
  
  
  
  
  
 


)
}

export default App;