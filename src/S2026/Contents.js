import logo from '../logo.svg';
 
import sk from '../resource/sk.svg';
import skGray from '../resource/sk_gray.svg'; 
import stars from '../resource/stars.svg';
import circle from '../resource/circle.svg'; 
import krrLogo from '../resource/krr logo.svg';
import hanLogo from '../resource/han logo.svg';
import mathLogo from '../resource/math logo.svg';
import zemboLogo from '../resource/zembo logo.svg';
import krrImg from '../resource/krrImg.jpg';
import luluImg from '../resource/luluImg.jpg';
import eliivyImg from '../resource/eliivyImg.jpg';
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './contents2026.css'
import instaLogo from '../resource/instaLogo.svg';
import youtubeLogo from '../resource/youtubeLogo.svg'; 
import blogLogo from '../resource/blogLogo.svg';
import { useLocation } from 'react-router-dom';  
import arrowDown from './resource/arrowDown.svg';
import bgWave from './resource/bgWave.svg'
 
import bg01 from './resource/bg01.svg'
import bg02 from './resource/bg02.svg'
 
import bgic1 from './resource/bgic1.svg'
import bgic2 from './resource/bgic2.svg'
import bgic3 from './resource/bgic3.svg'

import menuLulu from './resource/menuLulu.svg'
import menuHan from './resource/menuHan.svg'
import menuMath from './resource/menuMath.svg'
import menuEn from './resource/menuEn.svg'

import chLulu3 from './resource/chLulu3.svg';

import chHan3 from './resource/chHan3.svg';
import chMath3 from './resource/chMath3.svg';
import chEn3 from './resource/chEn3.svg';

import chLulu2 from './resource/chLulu2.svg';
import chHan2 from './resource/chHan2.svg';
import chMath2 from './resource/chMath2.svg';
import chEn2 from './resource/chEn2.svg';
import arrowBtn from './resource/arrowBtn.svg';
import t0511 from '../resource/thumbnail/Lulu/littles/5-1-1.jpg';
import parkBg from './resource/parkBg.svg'
import balloonLulu from './resource/balloonLulu.svg'
import balloonMath from './resource/balloonMath.svg'
import balloonHan from './resource/balloonHan.svg'
import balloonEn from './resource/balloonEn.svg'

import bgCloud from './resource/bgCloud.svg'

function Contents() {

  const navigate = useNavigate()
  const location = useLocation();
  const subjectIdx = location?.state?.idx!==undefined?location?.state?.idx:0;
  const [subject,setSubject] = useState(subjectIdx);
   
  const handleSubject = (idx) => {
    setSubject(idx) 
  } 
   



  const luluContentsList = [
    // Step1 -> 1호
    {subject:0,idx:0,step:0,vimeo:'814084830',},
    {subject:0,idx:1,step:0,vimeo:'814084767',}, 
    {subject:0,idx:2,step:0,vimeo:'814089365',},
    {subject:0,idx:3,step:0,vimeo:'814089406',}, 
    {subject:0,idx:4,step:0,vimeo:'814089716',},
    {subject:0,idx:5,step:0,vimeo:'814089754',}, 
    {subject:0,idx:6,step:0,vimeo:'814089793',},
    {subject:0,idx:7,step:0,vimeo:'814089821',}, 
   ]


  const hangeulContentsList = [
    // Step1 -> 1호
    {subject:1,idx:0,step:1,vimeo:'864705323',},
    {subject:1,idx:1,step:1,vimeo:'864705602',}, 
    {subject:1,idx:2,step:1,vimeo:'915837370',}, 
    {subject:1,idx:3,step:1,vimeo:'864705802',},
    {subject:1,idx:4,step:1,vimeo:'864706016',}, 
    {subject:1,idx:5,step:1,vimeo:'915837782',},
    {subject:1,idx:6,step:1,vimeo:'864706235',},
    {subject:1,idx:7,step:1,vimeo:'864706417',}, 
    {subject:1,idx:8,step:1,vimeo:'915837975',},
    {subject:1,idx:9,step:1,vimeo:'864706554',},
    {subject:1,idx:10,step:1,vimeo:'864706655',}, 
    {subject:1,idx:11,step:1,vimeo:'915838356',}, 

    // Step2 -> 1호
    {subject:1,idx:0,step:2,vimeo:'864701372',},
    {subject:1,idx:1,step:2,vimeo:'864701619',}, 
    {subject:1,idx:2,step:2,vimeo:'915841401',}, 
    {subject:1,idx:3,step:2,vimeo:'864701859',},
    {subject:1,idx:4,step:2,vimeo:'864702110',}, 
    {subject:1,idx:5,step:2,vimeo:'915841645',},
    {subject:1,idx:6,step:2,vimeo:'864702342',},
    {subject:1,idx:7,step:2,vimeo:'864702533',}, 
    {subject:1,idx:8,step:2,vimeo:'915841787',},
    {subject:1,idx:9,step:2,vimeo:'864702688',},
    {subject:1,idx:10,step:2,vimeo:'864702817',}, 
    {subject:1,idx:11,step:2,vimeo:'915841888',}, 

    // Step3 -> 1호
    {subject:1,idx:0,step:3,vimeo:'864717846',},
    {subject:1,idx:1,step:3,vimeo:'864718121',}, 
    {subject:1,idx:2,step:3,vimeo:'915842911',}, 
    {subject:1,idx:3,step:3,vimeo:'864718367',},
    {subject:1,idx:4,step:3,vimeo:'864718482',}, 
    {subject:1,idx:5,step:3,vimeo:'915843139',},
    {subject:1,idx:6,step:3,vimeo:'864718629',},
    {subject:1,idx:7,step:3,vimeo:'864718770',}, 
    {subject:1,idx:8,step:3,vimeo:'915843332',}, 
    {subject:1,idx:9,step:3,vimeo:'864718890',},
    {subject:1,idx:10,step:3,vimeo:'864719022',}, 
    {subject:1,idx:11,step:3,vimeo:'915843707',}, 
    
   ]
 
  const MathContentsList = [

     // Step1 -> 1호
    {subject:2,idx:0,step:1,vimeo:'863483952',},
    {subject:2,idx:1,step:1,vimeo:'863484129',}, 
    {subject:2,idx:2,step:1,vimeo:'863484287',},
    {subject:2,idx:3,step:1,vimeo:'863484451',},
    {subject:2,idx:4,step:1,vimeo:'863484613',},
    {subject:2,idx:5,step:1,vimeo:'863484768',}, 
    {subject:2,idx:6,step:1,vimeo:'863484917',},
    {subject:2,idx:7,step:1,vimeo:'863485014',}, 

    // Step2 -> 1호
    {subject:2,idx:0,step:2,vimeo:'863485128',},
    {subject:2,idx:1,step:2,vimeo:'863485217',}, 
    {subject:2,idx:2,step:2,vimeo:'863485421',},
    {subject:2,idx:3,step:2,vimeo:'863485566',}, 
    {subject:2,idx:4,step:2,vimeo:'863485710',},
    {subject:2,idx:5,step:2,vimeo:'863485768',},
    {subject:2,idx:6,step:2,vimeo:'863485912',},
    {subject:2,idx:7,step:2,vimeo:'863486063',}, 

    // Step3 -> 1호
    {subject:2,idx:0,step:3,vimeo:'863486212',},
    {subject:2,idx:1,step:3,vimeo:'863486299',}, 
    {subject:2,idx:2,step:3,vimeo:'863486423',},
    {subject:2,idx:3,step:3,vimeo:'863486504',},
    {subject:2,idx:4,step:3,vimeo:'863486594',},
    {subject:2,idx:5,step:3,vimeo:'863486673',}, 
    {subject:2,idx:6,step:3,vimeo:'863486872',},
    {subject:2,idx:7,step:3,vimeo:'863487043',}, 
  ]

   
  const EnglishContentsList = [
    // Littles -> 1호
    {subject:3,idx:0, step:0,vimeo:'514885278',},
    {subject:3,idx:1, step:0,vimeo:'514885544',}, 
    {subject:3,idx:2, step:0,vimeo:'514884582',},
    {subject:3,idx:3, step:0,vimeo:'514884766',},
    {subject:3,idx:4, step:0,vimeo:'514885036',}, 
    {subject:3,idx:5, step:0,vimeo:'514886081',},
    {subject:3,idx:6, step:0,vimeo:'514885778',}, 
    {subject:3,idx:7, step:0,vimeo:'514885885',},
    {subject:3,idx:8, step:0,vimeo:'514885959',},
    {subject:3,idx:9, step:0,vimeo:'514886031',},
    {subject:3,idx:10,step:0,vimeo:'514886851',},
    {subject:3,idx:11,step:0,vimeo:'514886902',}, 
    {subject:3,idx:12,step:0,vimeo:'514886689',},
    {subject:3,idx:13,step:0,vimeo:'514886758',},
    {subject:3,idx:14,step:0,vimeo:'514886807',},
    {subject:3,idx:15,step:0,vimeo:'514887190',},
    {subject:3,idx:16,step:0,vimeo:'514886968',}, 
    {subject:3,idx:17,step:0,vimeo:'514887025',},
    {subject:3,idx:18,step:0,vimeo:'514887140',},
    {subject:3,idx:19,step:0,vimeo:'514887097',},

     // Step1 -> 1호
    {subject:3,idx:0, step:1,vimeo:'514887968',},
    {subject:3,idx:1, step:1,vimeo:'514888093',}, 
    {subject:3,idx:2, step:1,vimeo:'514887618',},
    {subject:3,idx:3, step:1,vimeo:'514887748',},
    {subject:3,idx:4, step:1,vimeo:'514887820',}, 
    {subject:3,idx:5, step:1,vimeo:'514888683',},
    {subject:3,idx:6, step:1,vimeo:'514888199',}, 
    {subject:3,idx:7, step:1,vimeo:'514888320',},
    {subject:3,idx:8, step:1,vimeo:'514888435',},
    {subject:3,idx:9, step:1,vimeo:'514888517',},
    {subject:3,idx:10,step:1,vimeo:'514890445',},
    {subject:3,idx:11,step:1,vimeo:'514889918',}, 
    {subject:3,idx:12,step:1,vimeo:'514890061',},
    {subject:3,idx:13,step:1,vimeo:'514890175',},
    {subject:3,idx:14,step:1,vimeo:'514890245',},
    {subject:3,idx:15,step:1,vimeo:'514891087',},
    {subject:3,idx:16,step:1,vimeo:'514890630',}, 
    {subject:3,idx:17,step:1,vimeo:'514890791',},
    {subject:3,idx:18,step:1,vimeo:'514890935',},
    {subject:3,idx:19,step:1,vimeo:'514891005',},

    // Step2 -> 1호
    {subject:3,idx:0, step:2,vimeo:'514892070',},
    {subject:3,idx:1, step:2,vimeo:'514891544',}, 
    {subject:3,idx:2, step:2,vimeo:'514891681',},
    {subject:3,idx:3, step:2,vimeo:'514891844',},
    {subject:3,idx:4, step:2,vimeo:'514891986',}, 
    {subject:3,idx:5, step:2,vimeo:'514892783',},
    {subject:3,idx:6, step:2,vimeo:'514892222',}, 
    {subject:3,idx:7, step:2,vimeo:'514892378',},
    {subject:3,idx:8, step:2,vimeo:'514892498',},
    {subject:3,idx:9, step:2,vimeo:'514892642',},
    {subject:3,idx:10,step:2,vimeo:'514893302',},
    {subject:3,idx:11,step:2,vimeo:'514892945',}, 
    {subject:3,idx:12,step:2,vimeo:'514892997',},
    {subject:3,idx:13,step:2,vimeo:'514893155',},
    {subject:3,idx:14,step:2,vimeo:'514893242',},
    {subject:3,idx:15,step:2,vimeo:'514893707',},
    {subject:3,idx:16,step:2,vimeo:'514893377',}, 
    {subject:3,idx:17,step:2,vimeo:'514893429',},
    {subject:3,idx:18,step:2,vimeo:'514893536',},
    {subject:3,idx:19,step:2,vimeo:'514893621',},

    // Step3 -> 1호
    {subject:3,idx:0, step:3,vimeo:'514895924',},
    {subject:3,idx:1, step:3,vimeo:'514896290',}, 
    {subject:3,idx:2, step:3,vimeo:'514896687',},
    {subject:3,idx:3, step:3,vimeo:'514897297',},
    {subject:3,idx:4, step:3,vimeo:'514897463',}, 
    {subject:3,idx:5, step:3,vimeo:'514898551',},
    {subject:3,idx:6, step:3,vimeo:'514897596',}, 
    {subject:3,idx:7, step:3,vimeo:'514897847',},
    {subject:3,idx:8, step:3,vimeo:'514898000',},
    {subject:3,idx:9, step:3,vimeo:'514898226',},
    {subject:3,idx:10,step:3,vimeo:'514898834',},
    {subject:3,idx:11,step:3,vimeo:'514898895',}, 
    {subject:3,idx:12,step:3,vimeo:'514898731',},
    {subject:3,idx:13,step:3,vimeo:'514898760',},
    {subject:3,idx:14,step:3,vimeo:'514898798',},
    {subject:3,idx:15,step:3,vimeo:'514899066',},
    {subject:3,idx:16,step:3,vimeo:'514899103',}, 
    {subject:3,idx:17,step:3,vimeo:'514898935',},
    {subject:3,idx:18,step:3,vimeo:'514898958',},
    {subject:3,idx:19,step:3,vimeo:'514899016',},
   ]

   const handleGoVimeo=(subject,step,idx)=>{
    const getList = subject===0?luluContentsList:subject===1?hangeulContentsList:subject===2?MathContentsList:EnglishContentsList

    const vimeo = getList.find(
      item => item.idx === idx && item.step === step
    );
 
    let width = window.screen.width * 0.8;
    let height = (window.screen.width * 0.8) *  0.5625;
    let left = (window.screen.width - width) / 2;
    let top = (window.screen.height - height) / 2;
   
    let option = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizeble=no, copyhistory=no, width=${width}, height=${height}, left=${left}, top=${top}`
    


    window.open('https://player.vimeo.com/video/'+vimeo.vimeo, '_blank', option)
   }
  
  return (
    <div className='mainCenterLayout26' style={{backgroundColor:'#CCEDFF',}}> 
      <div className='mainLayout26' style={{alignItems:'center',position:'relative',zIndex:400}}>
        <div className='logoLayout26'>
          <img className='logoImg26' src={sk} alt='' onClick={()=>navigate('../2026sample')}/>
          <div className='logoBtnBar26'>
            <img src={instaLogo} className='social-icon' alt='' onClick={()=>window.open('https://www.instagram.com/juseom_kim/')}/>
            <img src={youtubeLogo} className='social-icon' alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
            <img src={blogLogo} className='social-icon' style={{marginRight:0}}  alt='' onClick={()=>window.open('https://blog.naver.com/juseomkim')}/>
          </div>
        </div>

       <div style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',alignItems:'center',position:'fixed'}}>
          <div style={{ backgroundColor:'#CCEDFF',display:'flex',flexDirection:'column',alignItems:'center',width:'fit-content',maxWidth:'calc(100% - 30px)'}}>
            <div className='nullDiv'/>
            <div className='ctgrBar26' style={{marginTop:20}}> 
              <div className={subject===0?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject(0)}>룰루</div>
              <div className={subject===1?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject(1)}>한글</div>
              <div className={subject===2?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject(2)}>수학</div>
              <div className={subject===3?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject(3)}>영어</div>
            </div> 
          </div>


          <div style={{width:'100%', display:'flex',justifyContent:'center',paddingBottom:20,background:'linear-gradient(to bottom, #CCEDFF 0%, rgba(204, 237, 255, 0) 100%)'}}>
             <img src={arrowDown} alt='' className='ctgrBarImg26'/>
          </div>
        </div> 
        
        <div className='nullDiv3'/> 
        
       
    
        {/* 룰루 */}
        {subject===0?
        <div className='subjectContents26'>
          
          <div className='contentBox26'>
            <div className='contentTitle26'>0단계 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26'></div>
              <div className='weekBarDay26'>월·화</div>
              <div className='weekBarDay26'>수·목·금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26'>1주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,0)}>룰루 1</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,1)}>룰루 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26'>2주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,2)}>룰루 3</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,3)}>룰루 4</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26'>3주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,4)}>룰루 5</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,5)}>룰루 6</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26'>4주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,6)}>룰루 7</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(0,0,7)}>룰루 8</div> 
            </div>

          </div> 
          
        </div>
        :subject===1? 
        <div className='subjectContents26'>
          <div className='contentBox26'>
              <div className='contentTitle26'>1단계 - 1호</div>
              <div className='weekBar26'>
                <div className='weekBarTitle26' ></div>
                <div className='weekBarDay26Han'>월·화</div>
                <div className='weekBarDay26Han'>수·목</div>
                <div className='weekBarDay26Han'>금</div>
              </div>
              <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>1주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,0)}>한글 1</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,1)}>한글 2</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,2)}>잼보 1</div> 
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>2주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,3)}>한글 3</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,4)}>한글 4</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,5)}>잼보 2</div> 
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>3주</div>
                <div className='contentName26Han'onClick={()=>handleGoVimeo(1,1,6)}>한글 5</div>
                <div className='contentName26Han'onClick={()=>handleGoVimeo(1,1,7)}>한글 6</div>
                <div className='contentName26Han'onClick={()=>handleGoVimeo(1,1,8)}>잼보 3</div>  
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>4주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,8)}>한글 7</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,9)}>한글 8</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,1,10)}>잼보 4</div> 
              </div>
          </div> 
    
          <div className='contentBox26'>
              <div className='contentTitle26'>2단계 - 1호</div>
              <div className='weekBar26'>
                <div className='weekBarTitle26' ></div>
                <div className='weekBarDay26Han'>월·화</div>
                <div className='weekBarDay26Han'>수·목</div>
                <div className='weekBarDay26Han'>금</div>
              </div>
              <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>1주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,0)}>한글 1</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,1)}>한글 2</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,2)}>잼보 1</div> 
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>2주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,3)}>한글 3</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,4)}>한글 4</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,5)}>잼보 2</div> 
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>3주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,6)}>한글 5</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,7)}>한글 6</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,8)}>잼보 3</div>  
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>4주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,9)}>한글 7</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,10)}>한글 8</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,2,11)}>잼보 4</div> 
              </div>
          </div>
    
          <div className='contentBox26'>
              <div className='contentTitle26'>3단계 - 1호</div>
              <div className='weekBar26'>
                <div className='weekBarTitle26' ></div>
                <div className='weekBarDay26Han'>월·화</div>
                <div className='weekBarDay26Han'>수·목</div>
                <div className='weekBarDay26Han'>금</div>
              </div>
              <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>1주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,0)}>한글 1</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,1)}>한글 2</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,2)}>잼보 1</div> 
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>2주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,3)}>한글 3</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,4)}>한글 4</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,5)}>잼보 2</div> 
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>3주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,6)}>한글 5</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,7)}>한글 6</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,8)}>잼보 3</div>  
              </div>
                <div className='contentBar26'>
                <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>4주</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,9)}>한글 7</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,10)}>한글 8</div>
                <div className='contentName26Han' onClick={()=>handleGoVimeo(1,3,11)}>잼보 4</div> 
              </div>
          </div>  
        </div>
        :subject===2?
        <div className='subjectContents26'>
          <div className='contentBox26'>
            <div className='contentTitle26'>1단계 - 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26' ></div>
              <div className='weekBarDay26'>월·화</div>
              <div className='weekBarDay26'>수·목·금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>1주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,0)}>수학 1</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,1)}>수학 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>2주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,2)}>수학 3</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,3)}>수학 4</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>3주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,4)}>수학 5</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,5)}>수학 6</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>4주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,6)}>수학 7</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,1,7)}>수학 8</div> 
            </div>
          </div> 
          <div className='contentBox26'>
            <div className='contentTitle26'>2단계 - 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26' ></div>
              <div className='weekBarDay26'>월·화</div>
              <div className='weekBarDay26'>수·목·금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>1주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,0)}>수학 1</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,1)}>수학 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>2주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,2)}>수학 3</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,3)}>수학 4</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>3주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,4)}>수학 5</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,5)}>수학 6</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>4주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,6)}>수학 7</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,2,7)}>수학 8</div> 
            </div>
          </div> 
          <div className='contentBox26'>
            <div className='contentTitle26'>3단계 - 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26' ></div>
              <div className='weekBarDay26'>월·화</div>
              <div className='weekBarDay26'>수·목·금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>1주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,0)}>수학 1</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,1)}>수학 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>2주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,2)}>수학 3</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,3)}>수학 4</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>3주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,4)}>수학 5</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,5)}>수학 6</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>4주</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,6)}>수학 7</div>
              <div className='contentName26' onClick={()=>handleGoVimeo(2,3,7)}>수학 8</div> 
            </div>
          </div> 
        </div>
        :
        <div className='subjectContents26'>
          <div className='contentBox26' style={{padding:'30px 15px 30px 15px'}}>
            <div className='contentTitle26' style={{paddingLeft:10}}>LITTLES-1</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26En'></div>
              <div className='weekBarDay26En'>월</div>
              <div className='weekBarDay26En'>화</div>
              <div className='weekBarDay26En'>수</div>
              <div className='weekBarDay26En'>목</div>
              <div className='weekBarDay26En'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26En'>1주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,0)}>영어<br/>1</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,1)}>영어<br/>2</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,2)}>영어<br/>3</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,3)}>영어<br/>4</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,4)}>영어<br/>5</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En'>2주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,5)}>영어<br/>6</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,6)}>영어<br/>7</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,7)}>영어<br/>8</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,8)}>영어<br/>9</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,9)}>영어<br/>10</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En'>3주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,10)}>영어<br/>11</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,11)}>영어<br/>12</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,12)}>영어<br/>13</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,13)}>영어<br/>14</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,14)}>영어<br/>15</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En'>4주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,15)}>영어<br/>16</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,16)}>영어<br/>17</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,17)}>영어<br/>18</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,18)}>영어<br/>19</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,0,19)}>영어<br/>20</div>  
            </div>
          </div>
          
          <div className='contentBox26' style={{padding:'30px 15px 30px 15px'}}>
            <div className='contentTitle26' style={{paddingLeft:10}}>STEP1-1</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26En'></div>
              <div className='weekBarDay26En'>월</div>
              <div className='weekBarDay26En'>화</div>
              <div className='weekBarDay26En'>수</div>
              <div className='weekBarDay26En'>목</div>
              <div className='weekBarDay26En'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>1주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,0)}>영어<br/>1</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,1)}>영어<br/>2</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,2)}>영어<br/>3</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,3)}>영어<br/>4</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,4)}>영어<br/>5</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>2주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,5)}>영어<br/>6</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,6)}>영어<br/>7</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,7)}>영어<br/>8</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,8)}>영어<br/>9</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,9)}>영어<br/>10</div> 
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>3주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,10)}>영어<br/>11</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,11)}>영어<br/>12</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,12)}>영어<br/>13</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,13)}>영어<br/>14</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,14)}>영어<br/>15</div>   
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#FDCE56',borderColor:'#FDCE56'}}>4주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,15)}>영어<br/>16</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,16)}>영어<br/>17</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,17)}>영어<br/>18</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,18)}>영어<br/>19</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,1,19)}>영어<br/>20</div>  
            </div>
          </div> 
         
          <div className='contentBox26' style={{padding:'30px 15px 30px 15px'}}>
            <div className='contentTitle26' style={{paddingLeft:10}}>STEP2-1</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26En'></div>
              <div className='weekBarDay26En'>월</div>
              <div className='weekBarDay26En'>화</div>
              <div className='weekBarDay26En'>수</div>
              <div className='weekBarDay26En'>목</div>
              <div className='weekBarDay26En'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>1주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,0)}>영어<br/>1</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,1)}>영어<br/>2</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,2)}>영어<br/>3</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,3)}>영어<br/>4</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,4)}>영어<br/>5</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>2주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,5)}>영어<br/>6</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,6)}>영어<br/>7</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,7)}>영어<br/>8</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,8)}>영어<br/>9</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,9)}>영어<br/>10</div> 
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>3주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,10)}>영어<br/>11</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,11)}>영어<br/>12</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,12)}>영어<br/>13</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,13)}>영어<br/>14</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,14)}>영어<br/>15</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#B6D86E',borderColor:'#B6D86E'}}>4주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,15)}>영어<br/>16</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,16)}>영어<br/>17</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,17)}>영어<br/>18</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,18)}>영어<br/>19</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,2,19)}>영어<br/>20</div>  
            </div>
          </div> 
  
          <div className='contentBox26' style={{padding:'30px 15px 30px 15px'}}>
            <div className='contentTitle26' style={{paddingLeft:10}}>STEP3-1</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26En'></div>
              <div className='weekBarDay26En'>월</div>
              <div className='weekBarDay26En'>화</div>
              <div className='weekBarDay26En'>수</div>
              <div className='weekBarDay26En'>목</div>
              <div className='weekBarDay26En'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>1주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,0)}>영어<br/>1</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,1)}>영어<br/>2</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,2)}>영어<br/>3</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,3)}>영어<br/>4</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,4)}>영어<br/>5</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>2주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,5)}>영어<br/>6</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,6)}>영어<br/>7</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,7)}>영어<br/>8</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,8)}>영어<br/>9</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,9)}>영어<br/>10</div> 
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>3주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,10)}>영어<br/>11</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,11)}>영어<br/>12</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,12)}>영어<br/>13</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,13)}>영어<br/>14</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,14)}>영어<br/>15</div>  
            </div>
            <div className='contentBar26'>
              <div className='week26En' style={{backgroundColor:'#8EBEE0',borderColor:'#8EBEE0'}}>4주</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,15)}>영어<br/>16</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,16)}>영어<br/>17</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,17)}>영어<br/>18</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,18)}>영어<br/>19</div>
              <div className='contentName26En' onClick={()=>handleGoVimeo(3,3,19)}>영어<br/>20</div>   
            </div>
          </div> 
        </div>
        }

        <div className='nullDiv2'/>
        
        
       
      </div>

    <div className='contentBgMotion26'>
      <div className='contentBgMotionFlex26' style={{justifyContent:'flex-end'}}>
        <img className='bgCloud1' src={bgCloud} alt=''/>  
        <img className='bgCloud2' src={bgCloud} alt=''/>  
      </div> 

      <div className='contentBgMotionFlex26'/>

      <div className='contentBgMotionFlex26'>
        <img className='bgCloud3' src={bgCloud} alt=''/>  
        <img className='bgCloud4' src={bgCloud} alt=''/>  
      </div> 
    </div>



        
      <div className='contentPageBg26'>
       <div className='contentPageBg26Ch'>
          <img src={chLulu3} alt=''/>
          <img src={chHan3} alt='' />
          <img src={chMath3} alt=''/>
          <img src={chEn3} alt=''  />
       </div>

       <div className='contentPageBg26Park'>

         <img src={parkBg} alt=''/>
       </div>
      </div>

 
    
  </div>
  );
}

export default Contents;
