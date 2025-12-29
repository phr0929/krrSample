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
import Home6 from './Home/Home6';



import H1_1 from './Home/H1_1';
import H2_1 from './Home/H2_1';
import H3_1 from './Home/H3_1';

import H1_2 from './Home/H1_2';
import H2_2 from './Home/H2_2';
import H3_2 from './Home/H3_2';

import H1_3 from './Home/H1_3';
import H2_3 from './Home/H2_3';
import H3_3 from './Home/H3_3';

import H1_4 from './Home/H1_4';
import H2_4 from './Home/H2_4';
import H3_4 from './Home/H3_4';

import H1_5 from './Home/H1_5';
import H2_5 from './Home/H2_5';
import H3_5 from './Home/H3_5';

import H1_6 from './Home/H1_6';
import H2_6 from './Home/H2_6';
import H3_6 from './Home/H3_6';

import H1_7 from './Home/H1_7';
import H2_7 from './Home/H2_7';
import H3_7 from './Home/H3_7';

import H1_8 from './Home/H1_8';
import H2_8 from './Home/H2_8';
import H3_8 from './Home/H3_8';

import H1_9 from './Home/H1_9';
import H2_9 from './Home/H2_9';
import H3_9 from './Home/H3_9';

import H1_10 from './Home/H1_10';
import H2_10 from './Home/H2_10';
import H3_10 from './Home/H3_10';

import H1_11 from './Home/H1_11';
import H2_11 from './Home/H2_11';
import H3_11 from './Home/H3_11';

import H1_12 from './Home/H1_12';
import H2_12 from './Home/H2_12';
import H3_12 from './Home/H3_12';

import M1_1 from './Home/M1_1';
import M2_1 from './Home/M2_1';
import M3_1 from './Home/M3_1';

import M1_2 from './Home/M1_2';
import M2_2 from './Home/M2_2';
import M3_2 from './Home/M3_2';

import M1_3 from './Home/M1_3';
import M2_3 from './Home/M2_3';
import M3_3 from './Home/M3_3';

import M1_4 from './Home/M1_4';
import M2_4 from './Home/M2_4';
import M3_4 from './Home/M3_4';

import M1_5 from './Home/M1_5';
import M2_5 from './Home/M2_5';
import M3_5 from './Home/M3_5';

import M1_6 from './Home/M1_6';
import M2_6 from './Home/M2_6';
import M3_6 from './Home/M3_6';

import M1_7 from './Home/M1_7';
import M2_7 from './Home/M2_7';
import M3_7 from './Home/M3_7';

import M1_8 from './Home/M1_8';
import M2_8 from './Home/M2_8';
import M3_8 from './Home/M3_8';

import M1_9 from './Home/M1_9';
import M2_9 from './Home/M2_9';
import M3_9 from './Home/M3_9';

import M1_10 from './Home/M1_10';
import M2_10 from './Home/M2_10';
import M3_10 from './Home/M3_10';

import M1_11 from './Home/M1_11';
import M2_11 from './Home/M2_11';
import M3_11 from './Home/M3_11';

import M1_12 from './Home/M1_12';
import M2_12 from './Home/M2_12';
import M3_12 from './Home/M3_12';


import L_7 from './Home/L_7';

import Test from './Test';

import SeomkimHome from './Home/SeomkimHome';
import Lesson from './Lesson/index';
import PromotionalVideo from './S2026/PromotionalVideo';

function App() {
 

  return (

    <div className='app warp'>
      
      <Suspense fallback="...loading">
        <Routes>

             
          
            {/* <Route  path="/" element={<NextTime/>} /> */}
            <Route path='/Test' element={<Test/>}/>
            <Route path='/' element={<Main2026/>}/>
            <Route path='/contents' element={<Contents2026/>}/> 
            <Route path='/PromotionalVideo' element={<PromotionalVideo/>}/> 

            <Route path='/krrAppZ1' element={<AppStep1/>}/>
            <Route path='/krrAppAES2' element={<AppStep2/>}/>
            <Route path='/krrAppZEW3' element={<AppStep3/>}/>

            <Route path='/AppStep1Backup' element={<AppStep1Backup/>}/>
            <Route path='/AppStep2Backup' element={<AppStep2Backup/>}/>
            <Route path='/AppStep3Backup' element={<AppStep3Backup/>}/>

            <Route path='/Lesson' element={<Lesson/>}/> 

            {/* <Route path="/Home" element={<Home/>}/> */}
            
            <Route path="/Home/Math6" element={<Home6/>}/>


            <Route  path="/Home/H11asc" element={<H1_1/>} />       
            <Route  path="/Home/H21ssf" element={<H2_1/>} />
            <Route  path="/Home/H31zsz" element={<H3_1/>} />
            <Route  path="/Home/M11dsd" element={<M1_1/>} />     
            <Route  path="/Home/M21qse" element={<M2_1/>} />
            <Route  path="/Home/M31csd" element={<M3_1/>} />

            <Route  path="/Home/H12wbc" element={<H1_2/>} />         
            <Route  path="/Home/H22wdf" element={<H2_2/>} />
            <Route  path="/Home/H32wzz" element={<H3_2/>} />
            <Route  path="/Home/M12wsd" element={<M1_2/>} />   
            <Route  path="/Home/M22wwe" element={<M2_2/>} />
            <Route  path="/Home/M32wsd" element={<M3_2/>} />

            <Route  path="/Home/H13abe" element={<H1_3/>} />           
            <Route  path="/Home/H23sde" element={<H2_3/>} />
            <Route  path="/Home/H33zze" element={<H3_3/>} />
            <Route  path="/Home/M13dse" element={<M1_3/>} /> 
            <Route  path="/Home/M23qwe" element={<M2_3/>} />
            <Route  path="/Home/M33cse" element={<M3_3/>} />

            <Route  path="/Home/H14asc" element={<H1_4/>} />          
            <Route  path="/Home/H24ssf" element={<H2_4/>} />
            <Route  path="/Home/H34zsz" element={<H3_4/>} />
            <Route  path="/Home/M14dsd" element={<M1_4/>} />  
            <Route  path="/Home/M24qse" element={<M2_4/>} />
            <Route  path="/Home/M34csd" element={<M3_4/>} />


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

            <Route  path="/Home/H17a" element={<H1_7/>} />
            <Route  path="/Home/M17a" element={<M1_7/>} />
            <Route  path="/Home/H27b" element={<H2_7/>} />
            <Route  path="/Home/M27b" element={<M2_7/>} />
            <Route  path="/Home/H37c" element={<H3_7/>} />
            <Route  path="/Home/M37c" element={<M3_7/>} />

            <Route  path="/Home/H1z8" element={<H1_8/>} />
            <Route  path="/Home/H2a8" element={<H2_8/>} />
            <Route  path="/Home/H3w8" element={<H3_8/>} />            
            <Route  path="/Home/M1a8" element={<M1_8/>} />
            <Route  path="/Home/M2e8" element={<M2_8/>} />
            <Route  path="/Home/M3t8" element={<M3_8/>} />


            {/* 9호 */}
            <Route  path="/Home/Hs19" element={<H1_9/>} />
            <Route  path="/Home/Ha29" element={<H2_9/>} />
            <Route  path="/Home/Hd39" element={<H3_9/>} />
            <Route  path="/Home/Mw19" element={<M1_9/>} />
            <Route  path="/Home/Mr29" element={<M2_9/>} />
            <Route  path="/Home/Mt39" element={<M3_9/>} />
            





            
            {/* 10호 */}
            <Route  path="/Home/Hw110" element={<H1_10/>} />
            <Route  path="/Home/Hs210" element={<H2_10/>} />
            <Route  path="/Home/Hq310" element={<H3_10/>} />
            <Route  path="/Home/Me110" element={<M1_10/>} />
            <Route  path="/Home/Mq210" element={<M2_10/>} />
            <Route  path="/Home/Mv310" element={<M3_10/>} />




            
            {/* 11호 */}
            <Route  path="/Home/Hr111" element={<H1_11/>} />
            <Route  path="/Home/Hc211" element={<H2_11/>} />
            <Route  path="/Home/Hu311" element={<H3_11/>} />
            <Route  path="/Home/My111" element={<M1_11/>} />
            <Route  path="/Home/Mn211" element={<M2_11/>} />
            <Route  path="/Home/Mg311" element={<M3_11/>} />




            
            {/* 12호 */}
            <Route  path="/Home/Hd212" element={<H2_12/>} />
            <Route  path="/Home/Hb112" element={<H1_12/>} />
            <Route  path="/Home/Hf312" element={<H3_12/>} />
            <Route  path="/Home/Ms112" element={<M1_12/>} />
            <Route  path="/Home/Me212" element={<M2_12/>} />
            <Route  path="/Home/Mz312" element={<M3_12/>} />




            <Route  path="/Home/L7a" element={<L_7/>} />

            <Route  path="/Home" element={<SeomkimHome/>} />

            

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
