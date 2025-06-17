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

import chLulu from './resource/chLulu.svg';

import chHan from './resource/chHan.svg';
import chMath from './resource/chMath.svg';
import chEn from './resource/chEn.svg';

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

function Lulu() {

  const navigate = useNavigate()
  const location = useLocation();

  
  const [subject,setSubject] = useState(0);
   
   
   
  return (
    <div className='mainCenterLayout26' style={{backgroundColor:'#EDF8F9',}}>

      <div className='mainLayout26' style={{alignItems:'center',position:'relative',zIndex:400}}>
        <div className='logoLayout26'>
          <img className='logoImg26' src={sk} alt='' onClick={()=>navigate('../2026sample')}/>
          <div className='logoBtnBar26'>
            <img src={instaLogo}  alt='' onClick={()=>window.open('https://www.instagram.com/juseom_kim/')}/>
            <img src={youtubeLogo}  alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
            <img src={blogLogo} style={{marginRight:0}}  alt='' onClick={()=>window.open('https://blog.naver.com/juseomkim')}/>
          </div>
        </div>
        
        <div className='nullDiv'/>
        
        <div className='ctgrBar26' style={{marginTop:20}}> 
          <div className={subject===0?'ctgrOn26':'ctgrOff26'} onClick={()=>setSubject(0)}>룰루</div>
          <div className={subject===1?'ctgrOn26':'ctgrOff26'} onClick={()=>setSubject(1)}>한글</div>
          <div className={subject===2?'ctgrOn26':'ctgrOff26'} onClick={()=>setSubject(2)}>수학</div>
          <div className={subject===3?'ctgrOn26':'ctgrOff26'} onClick={()=>setSubject(3)}>영어</div>
        </div> 
        <img src={arrowDown} alt='' className='ctgrBarImg26'/>
 
        <div className='contentBox26'>
          <div className='contentTitle26'>0단계 1호</div>
          <div className='weekBar26'>
            <div className='weekBarTitle26' ></div>
            <div className='weekBarDay26'>월·화</div>
            <div className='weekBarDay26'>수·목·금</div>
          </div>
          <div className='contentBar26'>
            <div className='week26'>1주</div>
            <div className='contentName26'>룰루 1</div>
            <div className='contentName26'>룰루 2</div> 
          </div>
            <div className='contentBar26'>
            <div className='week26'>2주</div>
            <div className='contentName26'>룰루 3</div>
            <div className='contentName26'>룰루 4</div> 
          </div>
            <div className='contentBar26'>
            <div className='week26'>3주</div>
            <div className='contentName26'>룰루 5</div>
            <div className='contentName26'>룰루 6</div> 
          </div>
            <div className='contentBar26'>
            <div className='week26'>4주</div>
            <div className='contentName26'>룰루 7</div>
            <div className='contentName26'>룰루 8</div> 
          </div>
          


        </div> 
       
 
       
        <div className='nullDiv'/>
       
      </div>

      {/* <div style={{zIndex:201,position:'fixed',display:'flex',alignItems:'flex-end',bottom:130,left:0,width:'100%',height:'100%',flexDirection:'row'}}>
        <div style={{display:'flex',flex:1,width:'100%',}}>
          <img src={chLulu2} alt='' style={{width:200,height:'auto',marginLeft:200}}/>
          <img src={chHan2} alt='' style={{width:200,height:'auto',marginLeft:20}}/>
        </div>

        <div style={{display:'flex',flex:1,width:'100%',justifyContent:'flex-end'}}>
          <img src={chMath2} alt='' style={{width:200,height:'auto',marginRight:20}}/>
          <img src={chEn2} alt='' style={{width:200,height:'auto',marginRight:200}}/>
        </div>
      </div> 
  */}
      <div style={{zIndex:200,position:'fixed',display:'flex',alignItems:'flex-end',justifyContent:'center',bottom:0,left:0,width:'100vw',height:'100vh'}}>
        <img src={parkBg} alt='' style={{objectFit:'cover',minWidth:500,}}/>
        {/* <div style={{width:'100%',height:200,backgroundColor:'#E0F6C7'}}/> */}
      </div>

 
    
  </div>
  );
}

export default Lulu;
