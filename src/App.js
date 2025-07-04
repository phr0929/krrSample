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
import Script2 from './Script2';
import KrrScript2step1 from './KrrScript2step1';
import KrrScript2step2 from './KrrScript2step2';
import KrrScript2step3 from './KrrScript2step3';
import ElliIvyScript2step1 from './ElliIvyScript2step1';
import ElliIvyScript2step2 from './ElliIvyScript2step2';
import ElliIvyScript2step3 from './ElliIvyScript2step3';
import KrrAppDownload from './KrrAppDownload';
import NextTime from './NextTime';
import Main2026 from './S2026/Main';
import Contents2026 from './S2026/Contents';
import AppStep1 from './AppStep1';
import AppStep2 from './AppStep2';
import AppStep3 from './AppStep3';

function App() {
 

  return (

    <div className='app warp'>
      
      <Suspense fallback="...loading">
        <Routes>
          
            {/* <Route  path="/" element={<NextTime/>} /> */}
            
            <Route path='/' element={<Main2026/>}/>
            <Route path='/contents' element={<Contents2026/>}/> 

            <Route path='/krrAppZ1' element={<AppStep1/>}/>
            <Route path='/krrAppAES2' element={<AppStep2/>}/>
            <Route path='/krrAppZEW3' element={<AppStep3/>}/>


            <Route  path="/2025Sample" element={<Main/>} />
            <Route path="/2025Sample/Krr" element={<Krr/>} />
            <Route path="/2025Sample/ElliIvy" element={<ElliIvy/>} />
            <Route path="/2025Sample/Lulu" element={<Lulu/>} />
            <Route path="/download" element={<Download/>} />             
            <Route path="/krrAppDownload" element={<KrrAppDownload/>} /> 

            <Route path="/Plan" element={<Plan/>} exact/>
          
            <Route path="/Plan/krr" element={<KrrPlan/>} /> 
            
            <Route path="/Plan/ppogle" element={<PpoglePlan/>} /> 
            
            <Route path="/Plan/elliivy" element={<ElliivyPlan/>} />  

                 
            <Route path="/Script2" element={<Script2/>} exact/>
          
            <Route path="/Script2/krrStep1" element={<KrrScript2step1/>} />             
            <Route path="/Script2/krrStep2" element={<KrrScript2step2/>} /> 
            <Route path="/Script2/krrStep3" element={<KrrScript2step3/>} /> 

          
            <Route path="/Script2/ElliIvyStep1" element={<ElliIvyScript2step1/>} />             
            <Route path="/Script2/ElliIvyStep2" element={<ElliIvyScript2step2/>} /> 
            <Route path="/Script2/ElliIvyStep3" element={<ElliIvyScript2step3/>} /> 
 

            

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
