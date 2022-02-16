
import AppElement from './AppElement';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";



import {useState, useEffect} from 'react';



const App = () => {
  

 


  return (
  <Router>
    <Routes> 
      <Route path="/" element={<Navigate to={"/table/" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)} />} />
      <Route path="/table">
        <Route path=":tableCode" element={<AppElement />}/>
      </Route>

    </Routes>
    

  </Router>
  
  
  
  
  
  
  
  
  
  
 


)
}

export default App;