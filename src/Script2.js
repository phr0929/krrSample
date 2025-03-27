import logo from './logo.svg';
import './App.css';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './script.css'
import elliivyAppIcon from './resource/elliivyAppIcon.svg';
import krrAppIcon from './resource/krrAppIcon.svg'; 
import instaLogo from './resource/instaLogo.svg';
import youtubeLogo from './resource/youtubeLogo.svg';
import krrStepOn1 from './resource/krrScriptStep1.svg';
import krrStepOn2 from './resource/krrScriptStep2.svg';
import krrStepOn3 from './resource/krrScriptStep3.svg';
import eliivyStepOn1 from './resource/eliivyStep1.svg';
import eliivyStepOn2 from './resource/eliivyStep2.svg';
import eliivyStepOn3 from './resource/eliivyStep3.svg';
 
function Script2() {
  
  
  const navigate = useNavigate();   

  return (
    <div className='mainLayout'>



      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' src={sk} alt='' style={{cursor:'auto'}} />

          <div className='menuBarMenu'> 
          
            
            <div className='goSkBtn goSkKrr' onClick={()=>window.open('http://www.edujusk.kr')}>섬김 사이트</div>
          </div>
          <div className='navMenuBar'>
            <div className='navTitleKrr' style={{marginRight:0}} >
              스피치 2호 대본
            </div>
             
          </div>
        </div>
      </div> 

      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:20,fontSize:16,fontWeight:700}}>
        <img src={sk} alt='' style={{margin:20,width:50,height:'auto'}}/>
        <div style={{width:'100%',height:'100%',textAlign:'center'}}>스피치 2호 대본</div> 
      </div> 

      <div style={{display:'flex',flexDirection:'row',width:'100%',padding:'10px 20px',boxSizing:'border-box'}}>
        <div onClick={()=>navigate('./krrStep1')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1,}}>
          <img src={krrStepOn1} alt='' style={{width:60,height:60,marginBottom:10}}/>
          <span>STPE1</span>
        </div>

        <div onClick={()=>navigate('./krrStep2')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
          <img src={krrStepOn2} alt='' style={{width:60,height:60,marginBottom:10}}/>
          <span>STPE2</span>
        </div>

        <div onClick={()=>navigate('./krrStep3')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
          <img src={krrStepOn3} alt='' style={{width:60,height:60,marginBottom:10}}/>
          <span>STPE3</span>
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'row',width:'100%',padding:'20px',marginTop:10,boxSizing:'border-box'}}>
        <div onClick={()=>navigate('./ElliIvyStep1')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1,}}>
          <img src={eliivyStepOn1} alt='' style={{width:60,height:60,marginBottom:10}}/>
          <span>STPE1</span>
        </div>

        <div onClick={()=>navigate('./ElliIvyStep2')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
          <img src={eliivyStepOn2} alt='' style={{width:60,height:60,marginBottom:10}}/>
          <span>STPE2</span>
        </div>

        <div onClick={()=>navigate('./ElliIvyStep3')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
          <img src={eliivyStepOn3} alt='' style={{width:60,height:60,marginBottom:10}}/>
          <span>STPE3</span>
        </div>
      </div>



      
 
    </div>

  
  );
}

export default Script2;
