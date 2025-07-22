import '../App.css';
import krrLogo from '../resource/krr logo.svg';
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import '../script.css' 
import './home.css'
import krrStepOn1 from '../resource/krrScriptStep1.svg';
import krrStepOn2 from '../resource/krrScriptStep2.svg';
import krrStepOn3 from '../resource/krrScriptStep3.svg';
import krrMath1 from '../resource/krrMathStep1.svg';
import krrMath2 from '../resource/krrMathStep2.svg';
import krrMath3 from '../resource/krrMathStep3.svg';
import eliivyStepOn1 from '../resource/eliivyStep1.svg';
import eliivyStepOn2 from '../resource/eliivyStep2.svg';
import eliivyStepOn3 from '../resource/eliivyStep3.svg';
 
function Home() {
  
  
  const navigate = useNavigate();   

  return (
    <div className='listLayoutHome'>

      <div style={{width:900,height:'100%',backgroundColor:'#fff'}}>
        <div className='listTitleBarHome'>
          <img src={krrLogo} alt=''/>
          <div>
            5호 가정안내문
          </div>
        </div>

       

        <div style={{display:'flex',flexDirection:'row',width:'100%',padding:'10px 20px',boxSizing:'border-box',}}>
          <div onClick={()=>navigate('./H15abc')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1,}}>
            <img src={krrStepOn1} alt='' style={{width:60,height:60,marginBottom:10}}/>
            <span>한글 STPE1</span>
          </div>

          <div onClick={()=>navigate('./H25sdf')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
            <img src={krrStepOn2} alt='' style={{width:60,height:60,marginBottom:10}}/>
            <span>한글 STPE2</span>
          </div>

          <div onClick={()=>navigate('./H35zzz')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
            <img src={krrStepOn3} alt='' style={{width:60,height:60,marginBottom:10}}/>
            <span>한글 STPE3</span>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'row',width:'100%',padding:'20px',marginTop:10,boxSizing:'border-box'}}>
          <div onClick={()=>navigate('./M15dsd')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1,}}>
            <img src={krrMath1} alt='' style={{width:60,height:60,marginBottom:10}}/>
            <span>수학 STPE1</span>
          </div>

          <div onClick={()=>navigate('./M25qwe')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
            <img src={krrMath2} alt='' style={{width:60,height:60,marginBottom:10}}/>
            <span>수학 STPE2</span>
          </div>

          <div onClick={()=>navigate('./M35csd')} style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:14,flex:1}}>
            <img src={krrMath3} alt='' style={{width:60,height:60,marginBottom:10}}/>
            <span>수학 STPE3</span>
          </div>
        </div>
      </div>



     
 
    </div>

  
  );
}

export default Home;
