
import '../App.css';  
 
import { useLocation } from 'react-router-dom'; 
import React, { useEffect ,Suspense} from 'react'
import { Route,Routes,useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
function Plan() {
  
  
  const navigate = useNavigate();
  const location = useLocation();

  const handlePlan = (link) =>{
    navigate(`./${link}`)
  }

   
  return (
    <div className='mainLayout'>
      <div onClick={()=>handlePlan('./krr')}>
        까르르
      </div>
      <div onClick={()=>handlePlan('./elliivy')}>
        엘리아이비
      </div>
      <div onClick={()=>handlePlan('./ppogle')}>
        보글
      </div>
      
    </div>
  );
}

export default Plan;
