import '../App.css';
import krrLogo from '../resource/krr logo.svg';
import { useLocation, useNavigate } from 'react-router-dom'
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
 
function SeomkimHome() {

const [issue, setIssue] = useState(() => {
  return localStorage.getItem('nowIssue') ?? 2;
});
  const [hStep1,setHStep1] = useState('H15abc');
  const [hStep2,setHStep2] = useState('H25sdf');
  const [hStep3,setHStep3] = useState('H35zzz');
  
  const [mStep1,setMStep1] = useState('M15dsd');
  const [mStep2,setMStep2] = useState('M25qwe');
  const [mStep3,setMStep3] = useState('M35csd');
  
   
  const linkList = [
     {issue:1,hStep1:'H11asc',hStep2:'H21ssf',hStep3:'H31zsz',mStep1:'M11dsd',mStep2:'M21qse',mStep3:'M31csd'},
     {issue:2,hStep1:'H12wbc',hStep2:'H22wdf',hStep3:'H32wzz',mStep1:'M12wsd',mStep2:'M22wwe',mStep3:'M32wsd'},
     {issue:3,hStep1:'H13abe',hStep2:'H23sde',hStep3:'H33zze',mStep1:'M13dse',mStep2:'M23qwe',mStep3:'M33cse'},
     {issue:4,hStep1:'H14asc',hStep2:'H24ssf',hStep3:'H34zsz',mStep1:'M14dsd',mStep2:'M24qse',mStep3:'M34csd'},
     {issue:5,hStep1:'H15abc',hStep2:'H25sdf',hStep3:'H35zzz',mStep1:'M15dsd',mStep2:'M25qwe',mStep3:'M35csd'},
     {issue:6,hStep1:'H16eww',hStep2:'H26abd',hStep3:'H36esd',mStep1:'M16pwe',mStep2:'M26wws',mStep3:'M36zzv'},
     {issue:7,hStep1:'H17a',hStep2:'H27b',hStep3:'H37c',mStep1:'M17a',mStep2:'M27b',mStep3:'M37c'},
     {issue:8,hStep1:'H1z8',hStep2:'H2a8',hStep3:'H3w8',mStep1:'M1a8',mStep2:'M2e8',mStep3:'M3t8'},
     {issue:9,hStep1:'Hs19',hStep2:'Ha29',hStep3:'Hd39',mStep1:'Mw19',mStep2:'Mr29',mStep3:'Mt39'},
     {issue:10,hStep1:'Hw110',hStep2:'Hs210',hStep3:'Hq310',mStep1:'Me110',mStep2:'Mq210',mStep3:'Mv310'},     
     {issue:11,hStep1:'Hr111',hStep2:'Hc211',hStep3:'Hu311',mStep1:'My111',mStep2:'Mn211',mStep3:'Mg311'},
     {issue:12,hStep1:'Hb112',hStep2:'Hd212',hStep3:'Hf312',mStep1:'Ms112',mStep2:'Me212',mStep3:'Mz312'},
  ]

 

  const handleGoLink=(link)=>{
    navigate(`../Home/${link}`)
  }

  useEffect(()=>{   
   const saved = localStorage.getItem('nowIssue');
   if(saved !== null){
    setIssue(Number(saved));
   }    
  },[])
  
  const handleIssue = (is) =>{
     window.localStorage.setItem("nowIssue",is)
     setIssue(is)
  }

 
  const navigate = useNavigate();   

  return (
    <div className='listLayoutHome'>

      <div style={{width:900,height:'100%',backgroundColor:'#fff',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div className='listTitleBarHome'>
          <img src={krrLogo} alt='' style={{width:200,maxWidth:'50%'}}/> 
        </div>

        <div className='noselect' style={{display:'flex',flexDirection:'row',maxWidth:480,width:'100%',alignItems:'center',justifyContent:'center', boxSizing:'border-box'}}>
          <div className={issue===1?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(1)}>1호</div>         
          <div className={issue===2?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(2)}>2호</div>        
          <div className='seomkimHomeBtnNull' >3호</div>          
          <div className='seomkimHomeBtnNull' >4호</div>          
          <div className={issue===5?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(5)}>5호</div>          
          <div className={issue===6?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(6)}>6호</div>  
        </div>
        <div className='noselect' style={{display:'flex',flexDirection:'row',maxWidth:480,width:'100%',alignItems:'center',justifyContent:'center', boxSizing:'border-box'}}>
          <div className={issue===7?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(7)}>7호</div>          
          <div className={issue===8?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(8)}>8호</div>    
          <div className={issue===9?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(9)}>9호</div>     
          <div className={issue===10?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(10)}>10호</div>  
          <div className={issue===11?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(11)}>11호</div>    
          <div className={issue===12?'seomkimHomeBtnOn':'seomkimHomeBtnOff'} onClick={()=>handleIssue(12)}>12호</div> 
        </div>
 

 
        <div style={{display:'flex',flexDirection:'row',maxWidth:480,width:'100%',alignItems:'center',justifyContent:'center', boxSizing:'border-box',marginTop:20,fontSize:15}}>
          <div style={{alignItems:'center',display:'flex',justifyContent:'center',width:150, maxWidth:'calc(30vw - 10px)',flexDirection:'column',padding:'10px 0px 10px 0px',
            textAlign:'center',borderRadius:10,margin:4,cursor:'pointer'}} onClick={()=>handleGoLink(linkList[issue-1].hStep1)} >        
            <img src={krrStepOn1} alt='' style={{width:60,height:60,marginBottom:10}}/>     <span>한글 STEP1</span>
          </div>

          <div style={{alignItems:'center',display:'flex',justifyContent:'center',width:150, maxWidth:'calc(30vw - 10px)',flexDirection:'column',padding:'10px 0px 10px 0px',
            textAlign:'center',borderRadius:10,margin:4,cursor:'pointer'}} onClick={()=>handleGoLink(linkList[issue-1].hStep2)}>        
            <img src={krrStepOn2} alt='' style={{width:60,height:60,marginBottom:10}}/>     <span>한글 STEP2</span>
          </div>

          <div style={{alignItems:'center',display:'flex',justifyContent:'center',width:150, maxWidth:'calc(30vw - 10px)',flexDirection:'column',padding:'10px 0px 10px 0px',
            textAlign:'center',borderRadius:10,margin:4,cursor:'pointer'}} onClick={()=>handleGoLink(linkList[issue-1].hStep3)}>        
            <img src={krrStepOn3} alt='' style={{width:60,height:60,marginBottom:10}}/>     <span>한글 STEP3</span>
          </div>

 
        </div>


         <div style={{display:'flex',flexDirection:'row',maxWidth:480,width:'100%',alignItems:'center',justifyContent:'center', boxSizing:'border-box'}}>
          <div style={{alignItems:'center',display:'flex',justifyContent:'center',width:150, maxWidth:'calc(30vw - 10px)',flexDirection:'column',padding:'10px 0px 10px 0px',
            textAlign:'center',borderRadius:10,margin:4,cursor:'pointer'}} onClick={()=>handleGoLink(linkList[issue-1].mStep1)}>        
            <img src={krrMath1} alt='' style={{width:60,height:60,marginBottom:10}}/>     <span>수학 STEP1</span>
          </div>

          <div style={{alignItems:'center',display:'flex',justifyContent:'center',width:150, maxWidth:'calc(30vw - 10px)',flexDirection:'column',padding:'10px 0px 10px 0px',
            textAlign:'center',borderRadius:10,margin:4,cursor:'pointer'}} onClick={()=>handleGoLink(linkList[issue-1].mStep2)}>       
            <img src={krrMath2} alt='' style={{width:60,height:60,marginBottom:10}}/>     <span>수학 STEP2</span>
          </div>

          <div style={{alignItems:'center',display:'flex',justifyContent:'center',width:150, maxWidth:'calc(30vw - 10px)',flexDirection:'column',padding:'10px 0px 10px 0px',
            textAlign:'center',borderRadius:10,margin:4,cursor:'pointer'}} onClick={()=>handleGoLink(linkList[issue-1].mStep3)}>      
            <img src={krrMath3} alt='' style={{width:60,height:60,marginBottom:10}}/>     <span>수학 STEP3</span>
          </div>

 
        </div>

    
      </div>



     
 
    </div>

  
  );
}

export default SeomkimHome;
