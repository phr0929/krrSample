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
import KrrAppDownloadBackup from './KrrAppDownloadBackup';
import NextTime from './NextTime';
import Main2026 from './S2026/Main';
import Contents2026 from './S2026/Contents';
import AppStep1 from './AppStep1';
import AppStep2 from './AppStep2';
import AppStep3 from './AppStep3';

import AppStep1Backup from './AppStep1Backup';
import AppStep2Backup from './AppStep2Backup';
import AppStep3Backup from './AppStep3Backup';

import Home from './Home/index';
import H1_5 from './Home/H1_5';
import H2_5 from './Home/H2_5';
import H3_5 from './Home/H3_5';
import H1_6 from './Home/H1_6';
import H2_6 from './Home/H2_6';
import H3_6 from './Home/H3_6';

import M1_5 from './Home/M1_5';
import M2_5 from './Home/M2_5';
import M3_5 from './Home/M3_5';


import M1_6 from './Home/M1_6';
import M2_6 from './Home/M2_6';
import M3_6 from './Home/M3_6';

import Test from './Test';


function App() {
 

  return (

    <div className='app warp'>
      
      <Suspense fallback="...loading">
        <Routes>

             
          
            {/* <Route  path="/" element={<NextTime/>} /> */}
            <Route path='/Test' element={<Test/>}/>
            <Route path='/' element={<Main2026/>}/>
            <Route path='/contents' element={<Contents2026/>}/> 

            <Route path='/krrAppZ1' element={<AppStep1/>}/>
            <Route path='/krrAppAES2' element={<AppStep2/>}/>
            <Route path='/krrAppZEW3' element={<AppStep3/>}/>

            <Route path='/AppStep1Backup' element={<AppStep1Backup/>}/>
            <Route path='/AppStep2Backup' element={<AppStep2Backup/>}/>
            <Route path='/AppStep3Backup' element={<AppStep3Backup/>}/>



            <Route path="/Home" element={<Home/>}/>
            <Route  path="/Home/H15abc" element={<H1_5/>} />
            <Route  path="/Home/M15dsd" element={<M1_5/>} />
            
            <Route  path="/Home/H25sdf" element={<H2_5/>} />
            <Route  path="/Home/M25qwe" element={<M2_5/>} />

            <Route  path="/Home/H35zzz" element={<H3_5/>} />
            <Route  path="/Home/M35csd" element={<M3_5/>} />

            
            <Route  path="/Home/H16eww" element={<H1_6/>} />
            <Route  path="/Home/M16pwe" element={<M1_6/>} />

            <Route  path="/Home/H26abd" element={<H2_6/>} />
            <Route  path="/Home/M26wws" element={<M2_6/>} />

            <Route  path="/Home/H36esd" element={<H3_6/>} />
            <Route  path="/Home/M36zzv" element={<M3_6/>} />


            <Route  path="/2025Sample" element={<Main/>} />
            <Route path="/2025Sample/Krr" element={<Krr/>} />
            <Route path="/2025Sample/ElliIvy" element={<ElliIvy/>} />
            <Route path="/2025Sample/Lulu" element={<Lulu/>} />
            <Route path="/download" element={<Download/>} />             
            <Route path="/krrAppDownload" element={<KrrAppDownload/>} /> 
            <Route path="/KrrAppDownloadBackup" element={<KrrAppDownloadBackup/>} /> 

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
