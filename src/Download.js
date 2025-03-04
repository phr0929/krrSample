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

function Download() {
  
  
  const navigate = useNavigate(); 
 
  const [isHovering, setIsHovering] = useState(2);
  const [scrollDown,setScrollDown] = useState(true); 
  const [scrollY,setScrollY] = useState(0); 
  const [navDialog,setNavDialog] = useState(false);
  
  const [step,setStep] = useState(10)  
  const [downMenu,setDownMenu] = useState(1)
  
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
    <div className='mainLayout'>
      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' onClick={()=>navigate('./')} src={sk} alt='' />

          <div className='menuBarMenu'> 
          
            
            <div className='goSkBtn goSkKrr' onClick={()=>window.open('http://www.edujusk.kr')}>섬김 사이트</div>
          </div>
          <div className='navMenuBar'>
            <div className='navTitleKrr' onClick={()=>handleMenuMousOver(2)}>
              스피치앱
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
{/* 
            <div className='speechTitlt'>
              <div>발표력 UP!</div>
              <div>자신감 UP UP! </div>
            </div>            
            <div className='speechContent speechContentPc' >
              매달 제공되는 발성, 발음 수업 영상과 스피치 대본으로
            </div> 
            <div className='speechContent speechContentMobile' >
              매달 제공되는
            </div>
            <div className='speechContent speechContentMobile' >
              발성, 발음 수업 영상과 스피치 대본으로
            </div>
            <div className='speechContent'>
              우리 아이의 스피치 레벨을 UP! 시켜보세요.
            </div> */}
            <div className='speechMenuBar' style={{marginBottom:20,fontFamily: 'BMJUA' }}>
              <div className={downMenu===1?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(1)}>다운로드</div>
              <div className={downMenu===2?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(2)}>회원가입</div>
              <div className={downMenu===3?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(3)}>이용방법</div>
            </div>
            {downMenu===1?
            <div className='speechDownload'>

              
              <div className='downloadBtnBar'>

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-ellilvy-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='downloadBtn' >
                    <img src={elliivyAppIcon} alt=''/>
                    <div>ElliIvy<br/>스피치 APP</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div> 
                </a> 

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-kkarhan-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='downloadBtn'>
                    <img src={krrAppIcon} alt=''/>
                    <div>까르르<br/>스피치 APP</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div>
                </a> 
  
              </div> 

          

              <div className='downStep'> 

                <div className='downLine'/>
                <div className='downStepTitle'>
                  1단계
                </div>
                <div className='downStepContents'>
                  파일 다운로드 창이 뜰 때마다 '다운로드' 버튼을 눌러주세요.
                </div>
              
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:50}}>
                  <img src={downImg1} alt='' style={{width:270,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc'}}/>      
                  <img src={downImg2} alt='' style={{width:270,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc',marginLeft:-120}}/> 
                  <img src={downImg3} alt='' style={{width:270,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc',marginLeft:-120}}/>
                </div>
                
                
                <div className='downLine'/>
                <div className='downStepTitle'>
                  2단계
                </div>
                <div className='downStepContents'>
                  다운로드 완료 된 설치파일을 열고 '설치하기' 버튼을 눌러 주세요.
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:50}}>
                  <img src={downImg4} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc'}}/>
                  <img src={downImg5} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc',marginLeft:10}}/>
                </div>


                <div className='downLine'/>
                <div className='downStepTitle'>
                  3단계
                </div>
                <div className='downStepContents'>
                  '무시하고 설치' 버튼을 누르고 설치된 파일을 열어주세요.
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:50}}>
                  <img src={downImg6} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc'}}/>
                  <img src={downImg7} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc',marginLeft:10}}/>
                </div>
              
                <div className='downLine'/>
                <div className='downStepTitle'>
                  4단계
                </div>
                <div className='downStepContents'>
                  권한 설정창이 열릴때마다 '앱 사용 중에는 허용'버튼을 눌러주세요.
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:50}}>
                  <img src={downImg8} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc'}}/>
                  <img src={downImg9} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc',marginLeft:10}}/>
                </div>
               
                <div className='downLine'/>
                <div className='downStepTitle'>
                  5단계
                </div>
                <div className='downStepContents'>
                  필수 권한을 설정하기 위해 '설정하기'버튼을 누르고, 권한 허용을 체크해 주세요.
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:50}}>
                  <img src={downImg10} alt='' style={{width:350,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc'}}/>
                  <img src={downImg11} alt='' style={{width:300,height:'fit-content',borderRadius:20,border:'1px solid #dcdcdc',marginLeft:10}}/>
                </div>
                


                {/* <img src={downImg1} alt='' style={{height:200,width:'auto',borderRadius:20,border:'1px solid #dcdcdc'}}/>      
                <img src={downImg2} alt='' style={{height:200,width:'auto',borderRadius:20,border:'1px solid #dcdcdc',}}/> 
                <img src={downImg3} alt='' style={{height:200,width:'auto',borderRadius:20,border:'1px solid #dcdcdc'}}/>  */}
                  {/* <img src={downImg1} alt='' style={{width:300,height:'auto',boxShadow:'3px 10px 10px #eee',borderRadius:20,border:'1px solid #f2f2f2'}}/>       */}
              </div> 
              
            </div>
            :downMenu===2?
            <div className='speechDownload'>
              <div className='speechTitlt' >
                <div>발표력 UP!</div>
                <div>자신감 UP UP! </div>

              </div>            
              <div className='speechContent speechContentPc' >
                매달 제공되는 발성, 발음 수업 영상과 스피치 대본으로
              </div> 
              <div className='speechContent speechContentMobile' >
                매달 제공되는
              </div>
              <div className='speechContent speechContentMobile' >
                발성, 발음 수업 영상과 스피치 대본으로
              </div>
              <div className='speechContent' style={{marginBottom:50}}>
                우리 아이의 스피치 레벨을 UP! 시켜보세요.
              </div>
              <div className='downloadBtnBar'>

              <a href="https://www.1min3.kr/resources/apks/fiveminspeech-ellilvy-release.apk" style={{textDecorationLine: 'none'}}>
                <div className='downloadBtn' >
                  <img src={elliivyAppIcon} alt=''/>
                  <div>ElliIvy<br/>스피치 APP</div>
                  <div className='downloadBtnText' >다운로드</div>
                </div>
              </a> 

              <a href="https://www.1min3.kr/resources/apks/fiveminspeech-kkarhan-release.apk" style={{textDecorationLine: 'none'}}>
                <div className='downloadBtn'>
                  <img src={krrAppIcon} alt=''/>
                  <div>까르르<br/>스피치 APP</div>
                  <div className='downloadBtnText'>다운로드</div>
                </div>
              </a> 

              </div> 

                <div className='speechVideo'>
                  <video loop controls>
                    <source src={app} type="video/mp4"></source>
                  </video>
                </div>
              
            </div>
            :
            <div className='speechDownload'>
              <div className='speechTitlt' >
                <div>발표력 UP!</div>
                <div>자신감 UP UP! </div>

              </div>            
              <div className='speechContent speechContentPc' >
                매달 제공되는 발성, 발음 수업 영상과 스피치 대본으로
              </div> 
              <div className='speechContent speechContentMobile' >
                매달 제공되는
              </div>
              <div className='speechContent speechContentMobile' >
                발성, 발음 수업 영상과 스피치 대본으로
              </div>
              <div className='speechContent' style={{marginBottom:50}}>
                우리 아이의 스피치 레벨을 UP! 시켜보세요.
              </div>
              <div className='downloadBtnBar'>

              <a href="https://www.1min3.kr/resources/apks/fiveminspeech-ellilvy-release.apk" style={{textDecorationLine: 'none'}}>
                <div className='downloadBtn' >
                  <img src={elliivyAppIcon} alt=''/>
                  <div>ElliIvy<br/>스피치 APP</div>
                  <div className='downloadBtnText' >다운로드</div>
                </div>
              </a> 

              <a href="https://www.1min3.kr/resources/apks/fiveminspeech-kkarhan-release.apk" style={{textDecorationLine: 'none'}}>
                <div className='downloadBtn'>
                  <img src={krrAppIcon} alt=''/>
                  <div>까르르<br/>스피치 APP</div>
                  <div className='downloadBtnText'>다운로드</div>
                </div>
              </a> 

              </div> 

                <div className='speechVideo'>
                  <video loop controls>
                    <source src={app} type="video/mp4"></source>
                  </video>
                </div>
              
            </div>
            }
            
           
                       

              <div className='bottomLayout'>
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

export default Download;
