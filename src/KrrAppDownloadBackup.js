
import logo from './logo.svg';
import './App.css';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css'

import bg01 from './S2026/resource/bg01.svg'
import bg02 from './S2026/resource/bg02.svg'
 
import bgic1 from './S2026/resource/bgic1.svg'
import bgic2 from './S2026/resource/bgic2.svg'
import bgic3 from './S2026/resource/bgic3.svg'

import step1 from './resource/STEP1.png'
import step2 from './resource/STEP2.png'
import step3 from './resource/STEP3.png'

import appstore from './resource/appstore.png'
import playstore from './resource/playstore.png'
import './S2026/contents2026.css'

function KrrAppDownload() {
  
  
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
  const [step1Code,setStep1Code] = useState('kwk159')
  const [step2Code,setStep2Code] = useState('jus649')  
  const [step3Code,setStep3Code] = useState('bds978')

  return (
    <div className='krrAppCodeLayout' >

        <img src={sk} alt='' className='krrAppCodeLogo'/>
       
        <div className='appDownloadText1'> 
          <div style={{margin:'0px 3px 2px 3px'}}>쓰는한글</div> 
          <div style={{margin:'0px 3px 2px 3px'}}>7월, 8월 입장코드</div> 
        </div>
        <div className='mainContentsText26' style={{marginTop:-4}}>
          <div style={{margin:'0px 2px 2px 2px'}}>※다음 호수부터는</div>
          <div style={{margin:'0px 2px 2px 2px'}}>STEP별로 입장코드가 제공됩니다.</div> 
        </div>

           
        <div className='krrAppCodeBox' style={{backgroundColor:'#ffc600',marginTop:30}}>
          <div className='krrAppCodeBoxTitle'>
            {/* <div></div> */}
            <div>STEP1</div>
            {/* <div onClick={()=>copyText('SDF456')}>COPY</div> */}
          </div>

          <div className='codeBox'>
            {[...step1Code].map((char, index) => (
              <div key={index}>{char}</div>
            ))} 
          </div>
        </div>

        
        <div className='krrAppCodeBox' style={{backgroundColor:'#81dc2e',marginTop:30}}>
          <div className='krrAppCodeBoxTitle'> 
            {/* <div></div> */}
            <div>STEP2</div>
            {/* <div onClick={()=>copyText('ZXC123')}>COPY</div> */}
          </div>

          <div className='codeBox'>
            {[...step2Code].map((char, index) => (
              <div key={index}>{char}</div>
            ))}
          </div>
        </div>


        <div className='krrAppCodeBox' style={{backgroundColor:'#10b2ee',marginTop:30}}>
          <div className='krrAppCodeBoxTitle'>
            {/* <div></div> */}
            <div>STEP3</div>
            {/* <div onClick={()=>copyText('QEW789')}>COPY</div> */}
          </div>

          <div className='codeBox'>
            {[...step3Code].map((char, index) => (
              <div key={index}>{char}</div>
            ))} 
          </div>
        </div>

 
        <div style={{display:'flex',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:50,marginBottom:70}}>

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

export default KrrAppDownload;
