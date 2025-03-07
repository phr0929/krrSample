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


import joinImg1 from './resource/download/j1.png'
import joinImg1_2 from './resource/download/j1-2.png'
import joinImg2 from './resource/download/j2.png'

import msg from './resource/download/msg.svg'

function Download() {
  
  
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
    <div className='mainLayout'>
      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' src={sk} alt='' style={{cursor:'auto'}} />

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
            </div>
            <div className='speechMenuBar' style={{marginBottom:20,fontFamily: 'BMJUA' }}>
              <div className={downMenu===1?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(1)} style={{width:150,maxWidth:'35vw'}}>다운로드</div>
              <div className={downMenu===2?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(2)} style={{width:150,maxWidth:'35vw'}}>이용방법</div>
            </div>
            {downMenu===1?
            <div className='speechDownload'>

              
              <div className='downloadBtnBar'>

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-ellilvy-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='downloadBtn' >
                    <img src={elliivyAppIcon} alt=''/>
                    <div>ElliIvy 스피치 APP</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div> 
                </a> 

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-kkarhan-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='downloadBtn'>
                    <img src={krrAppIcon} alt=''/>
                    <div>까르르 스피치 APP</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div>
                </a> 
  
              </div> 

          

              <div className='downStep'> 

                <div className='downLine'/>

                <div className='downStepTitle'>
                  01
                </div>
                <div className='downStepContents'>
                  설정 - 보안 위험 자동 차단 메뉴에서<br/>
                  보안 위험 자동 차단을 해제해 주세요.
                </div>
              
                <div className='downStepImgBox'>
                  <img src={security1} alt='' style={{width:350,maxWidth:'70%'}}/>       
                </div>

                <div className='downLine'/>

                
                <div className='downStepTitle'>
                  02
                </div>
                <div className='downStepContents'>
                 
                  파일 다운로드 창이 뜰 때마다 '다운로드' 버튼을 눌러주세요.
                </div>
              
                <div className='downStepImgBox'>
                  <img src={downImg1} alt='' style={{width:'calc((100% + 240px) / 3)'}}/>      
                  <img src={downImg2} alt='' style={{width:'calc((100% + 240px) / 3)',marginLeft:-120}}/> 
                  <img src={downImg3} alt='' style={{width:'calc((100% + 240px) / 3)',marginLeft:-120}}/>
                </div>
                
                
                <div className='downLine'/>
                <div className='downStepTitle'>
                  03
                </div>
                <div className='downStepContents'>
                  다운로드 완료 된 설치파일을 열고 '설치하기' 버튼을 눌러 주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg4} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg5} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>


                <div className='downLine'/>
                <div className='downStepTitle'>
                  04
                </div>
                <div className='downStepContents'>
                  '무시하고 설치' 버튼을 누르고 설치된 파일을 열어주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg6} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg7} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>
              
                <div className='downLine'/>
                <div className='downStepTitle'>
                  05
                </div>
                <div className='downStepContents'>
                  권한 설정창이 열릴때마다 '앱 사용 중에는 허용'버튼을 눌러주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg8} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg9} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>
               
                <div className='downLine'/>
                <div className='downStepTitle'>
                  06
                </div>
                <div className='downStepContents'>
                  필수 권한을 설정하기 위해 '설정하기'버튼을 누르고, 권한 허용을 체크해 주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg10} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg11} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>
                 
                <div className='downStepTitle'>
                  07
                </div>
                <div className='downStepContents'>
                  설정 - 보안 위험 자동 차단 메뉴에서<br/>
                  보안 위험 자동 차단을 다시 켜주세요.
                </div>
              
                <div className='downStepImgBox'>
                  <img src={security2} alt='' style={{width:350,maxWidth:'70%'}}/>       
                </div>

 
              </div> 
              
            </div>
            :
            <div className='speechDownload'> 
              <div className='downStepContents' style={{marginTop:15,marginBottom:0}}>
              ※사이트에서 스피치앱을 주문해 주시면 지사로 아이디와 비밀번호를 전달해 드려요.
              </div>
                   
              <div className='speechVideo'>
                <video loop controls>
                  <source src={app} type="video/mp4"></source>
                </video>
              </div>
              
            </div>
            }

            {/* <div className='speechTitlt'>
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
            </div>
            <div className='speechMenuBar' style={{marginBottom:20,fontFamily: 'BMJUA' }}>
              <div className={downMenu===1?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(1)}>다운로드</div>
              <div className={downMenu===2?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(2)}>가입방법</div>
              <div className={downMenu===3?'speechMenuBarOn':'speechMenuBarOff'} onClick={()=>handleDownloadMenu(3)}>이용방법</div>
            </div>
            {downMenu===1?
            <div className='speechDownload'>

              
              <div className='downloadBtnBar'>

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-ellilvy-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='downloadBtn' >
                    <img src={elliivyAppIcon} alt=''/>
                    <div>ElliIvy 스피치 APP</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div> 
                </a> 

                <a href="https://www.1min3.kr/resources/apks/fiveminspeech-kkarhan-release.apk" style={{textDecorationLine: 'none'}}>
                  <div className='downloadBtn'>
                    <img src={krrAppIcon} alt=''/>
                    <div>까르르 스피치 APP</div>
                    <div className='downloadBtnText'>다운로드</div>
                  </div>
                </a> 
  
              </div> 

          

              <div className='downStep'> 

                <div className='downLine'/>
                <div className='downStepTitle'>
                  01
                </div>
                <div className='downStepContents'>
                  파일 다운로드 창이 뜰 때마다 '다운로드' 버튼을 눌러주세요.
                </div>
              
                <div className='downStepImgBox'>
                  <img src={downImg1} alt='' style={{width:'calc((100% + 240px) / 3)'}}/>      
                  <img src={downImg2} alt='' style={{width:'calc((100% + 240px) / 3)',marginLeft:-120}}/> 
                  <img src={downImg3} alt='' style={{width:'calc((100% + 240px) / 3)',marginLeft:-120}}/>
                </div>
                
                
                <div className='downLine'/>
                <div className='downStepTitle'>
                  02
                </div>
                <div className='downStepContents'>
                  다운로드 완료 된 설치파일을 열고 '설치하기' 버튼을 눌러 주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg4} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg5} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>


                <div className='downLine'/>
                <div className='downStepTitle'>
                  03
                </div>
                <div className='downStepContents'>
                  '무시하고 설치' 버튼을 누르고 설치된 파일을 열어주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg6} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg7} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>
              
                <div className='downLine'/>
                <div className='downStepTitle'>
                  04
                </div>
                <div className='downStepContents'>
                  권한 설정창이 열릴때마다 '앱 사용 중에는 허용'버튼을 눌러주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg8} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg9} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>
               
                <div className='downLine'/>
                <div className='downStepTitle'>
                  05
                </div>
                <div className='downStepContents'>
                  필수 권한을 설정하기 위해 '설정하기'버튼을 누르고, 권한 허용을 체크해 주세요.
                </div>
                <div className='downStepImgBox'>
                  <img src={downImg10} alt='' style={{width:'calc((100% - 10px) / 2)'}}/>
                  <img src={downImg11} alt='' style={{width:'calc((100% - 10px) / 2)', marginLeft:10}}/>
                </div>
                 
              </div> 
              
            </div>
            :downMenu===2?
            <div className='speechDownload' style={{marginTop:20}}>

            
            <div className='downStepTitle'>
                01
            </div>
            <div className='downStepContents' style={{marginBottom:10}}>
                회원가입 정보를 아래 설명에 맞게 입력해 주세요.
            </div>
              
            <div className='downStepLayout'>
              <div className='downStepImgBox' style={{marginBottom:10,width:500}}>
                <img src={joinImg1} alt='' style={{width:'100%',marginTop:10}}/>       
              </div>

              <div className='joinContents'> 
                <div className='joinContentsText'>
                  <div>1</div>
                  <div>기관명 : 원 이름을 입력해 주세요.</div>
                </div> 
                <div className='joinContentsText'>
                  <div>2</div>
                  <div>지사명 : 지사 이름을 입력해 주세요.</div>
                </div> 

                <div className='joinContentsText'>
                  <div>3</div>
                  <div>아이디 : 아이디를 입력해 주세요. 영어와 숫자만 사용 가능합니다.</div>
                </div> 

                <div className='joinContentsText'>
                  <div>4</div>
                  <div>휴대폰 : 전화번호를 (-) 없이 숫자만 입력해 주세요.</div>
                </div> 

                <div className='joinContentsText'>
                  <div>5</div>
                  <div>비밀번호 : 비밀번호를 입력해 주세요.</div>
                </div> 
              
              
                <div className='joinContentsText'>
                  <div>6</div>
                  <div>비밀번호확인 : 비밀번호를 한번 더 입력해 주세요.</div>
                </div> 

                <div className='joinContentsText'>
                  <div>7</div>
                  <div>이메일 : 이메일 주소를 입력해 주세요.</div>
                </div> 

                <div className='joinContentsText'>
                  <div>8</div>
                  <div>주소 : 원 주소를 입력해 주세요.</div>
                </div> 

                
                <div className='joinContentsText'>
                  <div>9</div>
                  <div>워터마크 : 저장되는 영상에 표시되는 내용입니다.</div>
                  
                  <div className='watermarkImgPc' onClick={()=>setWatermark(true)}>미리보기</div>
                </div>


                <div className='watermarkImgMobile' onClick={()=>setWatermark(true)}>미리보기</div>

              </div>
            </div>

            <div className='downLine' style={{marginTop:0}}/>
            <div className='downStepTitle'>
                02
            </div>
            <div className='downStepContents' style={{marginBottom:10}}>
              등록 페이지가 열리면 아무 내용도 입력하지 마시고 등록완료 버튼을 눌러주세요.
            </div>
              
            
            
            <div className='downStepLayout' style={{marginBottom:50}}>
              <div className='downStepImgBox' style={{marginBottom:10,width:500}}>
                <img src={joinImg2} alt='' style={{width:'100%',marginTop:10}}/>       
              </div>
            </div>

            <div className='downLine' style={{marginTop:0}}/>
            <div className='downStepTitle'>
                03
            </div>
            <div className='downStepContents' style={{marginBottom:20}}>
              회원가입 후 아래 연락처로 문자를 남겨주세요.<br/>
              내용 : 과목(영어/한글), 아이디, 연령 별 원아 수            
            </div>
              
            
            <a href="sms:01058202473?body=스피치 회원가입 승인 부탁드립니다. 과목 : 영어/한글, 아이디 : ,연령 별 원아 수 : 0세 0명" style={{textDecorationLine: 'none'}}>
              <div className='joinMsg'>
                  010-5820-2473
              </div>
            </a>
              
              
            </div> 
            :
            <div className='speechDownload'>
             

                <div className='speechVideo'>
                  <video loop controls>
                    <source src={app} type="video/mp4"></source>
                  </video>
                </div>
              
            </div>
            } */}
            
           
                       

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

export default Download;
