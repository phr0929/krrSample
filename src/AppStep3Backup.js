import logo from './logo.svg';
import './App.css';
import sk from './resource/sk.svg';
import skBlue from './resource/sk_blue.svg';

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css'

import bg01 from './S2026/resource/bg01.svg'
import bg02 from './S2026/resource/bg02.svg'
 
import bgic1 from './S2026/resource/bgic1.svg'
import bgic2 from './S2026/resource/bgic2.svg'
import bgic3 from './S2026/resource/bgic3.svg'

import step1 from './resource/STEP1IMG-8.png'
import step2 from './resource/STEP2IMG-8.png'
import step3 from './resource/STEP3IMG-8.png'

import appstore from './resource/appstore.png'
import playstore from './resource/playstore.png'
import './S2026/contents2026.css'

function AppStep3() {


  const navigate = useNavigate(); 
  

 function copyText(text) {
  if (!navigator.clipboard) {
    alert("복사 기능을 지원하지 않는 브라우저입니다.");
    return;
  }

  navigator.clipboard.writeText(text).catch((err) => {
    alert("복사에 실패했습니다. 😢");
    console.error("복사 실패:", err);
  });
}


  const [step3Code,setStep3Code] = useState('bds978')
   
  return (
      <div className='krrAppCodeLayout'>

        <div className='krrAppCodeBoxVer2' style={{backgroundColor:'#10b2ee',marginTop:20}}>

          <img src={skBlue} alt='' className='krrAppCodeLogo'/>
          <div className='appDownloadText1Ver2'> 
            {/* <div style={{margin:'0px 3px 2px 3px'}}>쓰는한글 6호</div>
            <div style={{margin:'0px 3px 2px 3px'}}>STEP3 입장코드</div>  */}

            
            <div style={{margin:'0px 3px 2px 3px'}}>쓰는한글</div>
            <div style={{margin:'0px 3px 2px 3px'}}>STEP3 입장코드</div> 

            <div style={{fontSize:25,marginTop:30,marginBottom:20,color:'#ffffff',}}>
              사용기한 : 25년 07월 ~ 26년 02월
            </div>

          </div> 
          <div className='codeBox' style={{paddingTop:20}}>
            {[...step3Code].map((char, index) => (
              <div key={index}>{char}</div>
            ))} 
          </div>

           <img src={step3} alt='' className='krrAppStepImg'/>
        </div>

        

         

 
        <div className='krrAppDownButtonBar' >

          <div style={{display:'flex',flexDirection:'row',border:'1px solid #dcdcdc',borderRadius:10,alignItems:'center',padding:'10px 20px',
            boxShadow:'0px 2px 2px #dcdcdc',marginRight:10,boxSizing:'border-box',cursor:'pointer'}}
            onClick={()=>window.open('https://apps.apple.com/kr/app/%EC%93%B0%EB%8A%94%ED%95%9C%EA%B8%80/id6633439192')}>
            <img src={appstore} alt='' style={{width:30,height:33,marginRight:10}}/>
            <div style={{fontSize:15}}>AppStore</div>
          </div>

          <div style={{display:'flex',flexDirection:'row',border:'1px solid #dcdcdc',borderRadius:10,alignItems:'center',padding:'10px 20px',boxShadow:'0px 2px 2px #dcdcdc',boxSizing:'border-box',cursor:'pointer'}}
            onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.seomgim.korean&pcampaignid=web_share')}>
            <img src={playstore} alt='' style={{width:30,height:33,marginRight:10}}/>
            <div style={{fontSize:15}}>PlayStore</div>
          </div>

        </div>
    </div>
 

 
  );
}

export default AppStep3;
