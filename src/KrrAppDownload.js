import logo from './logo.svg';
import './App.css';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css'
import instaLogo from './resource/instaLogo.svg';
import youtubeLogo from './resource/youtubeLogo.svg';
import elliivyAppIcon from './resource/elliivyAppIcon.svg';
import krrAppIcon from './resource/krrAppIcon.svg'; 
import app from './resource/appvideo.mp4'
import stars from './resource/stars.svg';
import circle from './resource/circle.svg';

import downImg1 from './resource/download/1.png'
import downImg2 from './resource/download/2.png'
import downImg3 from './resource/download/3.png'
import downImg4 from './resource/download/4.png'
import downImg5 from './resource/download/5.png'
import downImg6 from './resource/download/6.png'
import downImg7 from './resource/download/7.png'
import downImg8 from './resource/download/8.png'
import downImg9 from './resource/download/9.png'
import downImg10 from './resource/download/10.png'
import downImg11 from './resource/download/11.png'

import security1 from './resource/download/s1.png'
import security2 from './resource/download/s2.png'
import krrApp from './resource/krrapp.png'

import joinImg1 from './resource/download/j1.png'
import joinImg1_2 from './resource/download/j1-2.png'
import joinImg2 from './resource/download/j2.png'
import appstore from './resource/appstore.png'
import playstore from './resource/playstore.png'

import msg from './resource/download/msg.svg'

function KrrAppDownload() {
  
  
  const navigate = useNavigate(); 
 
  const [isHovering, setIsHovering] = useState(2);
  const [scrollDown,setScrollDown] = useState(true); 
  const [scrollY,setScrollY] = useState(0); 
  const [navDialog,setNavDialog] = useState(false);
  
  const [step,setStep] = useState(10)  
  const [downMenu,setDownMenu] = useState(1)

  const [watermark,setWatermark] = useState(false)

   
  
  const handleMenuMousOver = (idx) => {
    setScrollDown(true)
    setIsHovering(idx)
  }

  const handleNavStepChange = (idx,link) => {
    setNavDialog(false)
    setStep(idx)
    window.scrollTo(0,0)
    setScrollY(0)
    navigate(link, {state:{idx:idx}})
  }
  
  const handleDownloadMenu = (idx) => {
    setDownMenu(idx)
  }

  return (
    <div className='mainLayout' style={{width:'100vw'}}>
      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' src={sk} alt='' style={{cursor:'auto'}} />

          <div className='menuBarMenu'> 
          
            
            <div className='goSkBtn goSkKrr' onClick={()=>window.open('http://www.edujusk.kr')}>섬김 사이트</div>
          </div>
          <div className='navMenuBar'>
            <div className='navTitleKrr' style={{marginRight:0}} onClick={()=>handleMenuMousOver(2)}>
              쓰는한글
            </div>
            
            {/* <div className='navMenu bgYellow' onClick={()=>setNavDialog(true)}>
              <div className='navLine'></div>
              <div className='navLine'></div>
              <div className='navLine'></div>
            </div> */}
          </div>
        </div>
      </div> 
   
      
      <div  className='downloadCenterLayout'>

            <div className='speechTitlt2' style={{flexDirection:'column'}}>
              <div>영상으로 쏙! 손으로 쓱~</div>
              <div>우리 아이 첫 한글 쓰기 앱</div>
            </div>            
            <div className='speechContent speechContentPc' >
              각 스텝별 입장코드는 원에 문의해 주세요.
            </div> 
            <div className='speechContent speechContentMobile' style={{width:'90%'}} >
            각 스텝별 입장코드는 원에 문의해 주세요.
            </div> 
             
            <div style={{display:'flex',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30,marginBottom:30}}>

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
            <img src={krrApp} alt='' style={{width:800,maxWidth:'90%',height:'auto',marginBottom:50}}/>

            {/* <div className='speechDownload'>

              
              <div className='krrAppDownloadBtnBar' >

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-ellilvy-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='krrAppDownloadBtn' >
                    <img src={appstore} alt='' style={{width:60,height:60,marginBottom:15}}/>
                    <div>AppStore</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div> 
                </a> 

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-kkarhan-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='krrAppDownloadBtn'>
                    <img src={playstore} alt='' style={{width:60,height:60,marginBottom:15}}/>
                    <div>Android</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div>
                </a> 
  
              </div> 

          
 
              
            </div> */}
          
            
           
                       

              <div className='bottomLayout' style={{paddingBottom:50}}>
                <div className='bottomLayoutIn'>
                  <img src={skGray} alt=''/>
                  <div className='bottomText'>
                    <div>(주)섬김 │ 대표 : 임영수</div> 
                    <div>사업자등록번호 : 886-86-00204</div>
                    <div>대표번호 1533-2473</div>
                    <div>©2023 by (주)섬김 All Rights Reserved.</div>
                  </div>
                  <div className='bottomBtn'>
                    <img src={instaLogo} alt='' onClick={()=>window.open('https://www.instagram.com/krrhangeul_official/')}/>
                    <img src={youtubeLogo} alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
                    {/* <img src={blogLogo} alt='' /> */}
                  </div>
                </div>
                
              </div>
        
      
          </div>        
           
        <img src={stars} alt='' className='stars' />
        <img src={circle} alt='' className='circle1'/>
        <img src={circle} alt='' className='circle2'/>

      {watermark?
      <div  onClick={()=>setWatermark(false)} className='watermarkDialog'>
        <div className='watermarkDialogCancel'>X</div>
        <img src={joinImg1_2} alt='' className='watermarkDialogImg'/>
        
      </div>:''}
      
      {navDialog===true?
      <div className={navDialog?'navDialog navDialogOn':'navDialog navDialogOff'}> 
        <div className='navDialogStatusBar'>
          <div className='navDialogImgBar'>
            <img className='logoImg' onClick={()=>navigate('../')} src={sk} alt='' />
          </div>

          <div className='navDialogStatusCancel bgYellow' onClick={()=>setNavDialog(false)}>
            <div className='navCancelLine1'></div>
            <div className='navCancelLine2'></div>
          </div>
             
        </div>
        <div className='navDialogMenu'>  
          {/* <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(0,'../Lulu')}>안녕! 룰루</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(0,'../Lulu')}  className={step===0?'navDialogMenuStepOn navStepLuluOn':'navDialogMenuStepOff'}>LITTLES</div>
            </div>
          </div>
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(1,'../Krr')}>까르르한글수</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(1,'../Krr')}   className={step===1?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'} >STEP1</div>
              <div onClick={()=>handleNavStepChange(2,'../Krr')}   className={step===2?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'}>STEP2</div>
              <div onClick={()=>handleNavStepChange(3,'../Krr')}   className={step===3?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'}>STEP3</div>
            </div>
          </div>
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(4,'../ElliIvy')}>ElliIvy English</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(4,'../ElliIvy')}  className={step===4?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>LITTLES</div>
              <div onClick={()=>handleNavStepChange(5,'../ElliIvy')}  className={step===5?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP1</div>
              <div onClick={()=>handleNavStepChange(6,'../ElliIvy')}  className={step===6?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP2</div>
              <div onClick={()=>handleNavStepChange(7,'../ElliIvy')}  className={step===7?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP3</div>
            </div>
          </div> */}

          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitle colorYellow' onClick={()=>handleNavStepChange(1,'../Download')}>APP 다운로드</div>
           
          </div>
       
        </div>
        </div> :''}
      </div>

  
  );
}

export default KrrAppDownload;