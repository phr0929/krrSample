
import '../App.css';  
import { useLocation } from 'react-router-dom'; 
import React, { useEffect ,Suspense} from 'react'
import { Route,Routes,useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
function Ppogle() {
  
  
  const navigate = useNavigate();
  const location = useLocation();
   
  
 
   
  return (
    <div className='mainLayout'>

      
    </div>
  );
}

export default Ppogle;
