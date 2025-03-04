import './App.css';
import React, { useEffect ,Suspense} from 'react'
import { Route,Routes,useHistory} from "react-router-dom"
import Main from './Main'
import Krr from './Krr'
import ElliIvy from './ElliIvy'
import Lulu from './Lulu'
import Download from './Download';
import KrrPlan from './Plan/Krr';
import ElliivyPlan from './Plan/Elliivy';
import PpoglePlan from './Plan/Ppogle';
import Plan from './Plan/index';



function App() {
 

  return (

    <div className='app'>
      
      <Suspense fallback="...loading">
        <Routes>
            <Route  path="/" element={<Main/>} />
            <Route path="/Krr" element={<Krr/>} />
            <Route path="/ElliIvy" element={<ElliIvy/>} />
            <Route path="/Lulu" element={<Lulu/>} />
            <Route path="/download" element={<Download/>} /> 
            
            <Route path="/Plan" element={<Plan/>} exact/>
          
            <Route path="/Plan/krr" element={<KrrPlan/>} /> 
            
            <Route path="/Plan/ppogle" element={<PpoglePlan/>} /> 
            
            <Route path="/Plan/elliivy" element={<ElliivyPlan/>} /> 
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
