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
import { useEffect, useRef, useState } from 'react'; 
import './contents2026.css'
import instaLogo from '../resource/instaLogo.svg';
import youtubeLogo from '../resource/youtubeLogo.svg'; 
import blogLogo from '../resource/blogLogo.svg';
import { useLocation, useNavigate } from 'react-router-dom';  
 
import bg01 from './resource/bg01.svg'
import bg02 from './resource/bg02.svg'
  
import promotionalVideo1 from '../resource/promotionalVideo1.png';

function PromotionalVideo() {

  const navigate = useNavigate()
  const location = useLocation();
   
  const handleGoVimeo=(link)=>{
     
   
  let width = window.screen.width * 1;
  let height = width * 0.5625; // 16:9 비율 유지
  let left = 0;
  let top = 0;

  let option = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=${width},height=${height},left=${left},top=${top}`;


    window.open('https://player.vimeo.com/video/'+link, '_blank', option)
   }
 
   
   
  return (
    <div className='mainCenterLayout26'>

      <div className='mainLayout26'>
        <div className='logoLayout26'>
          <img className='logoImg26' src={sk} alt=''/>
          <div className='logoBtnBar26'>
            <img src={instaLogo} className='social-icon' alt='' onClick={()=>window.open('https://www.instagram.com/krr_edu_official/')}/>
            <img src={youtubeLogo} className='social-icon' alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
            <img src={blogLogo} className='social-icon' style={{marginRight:0}}  alt='' onClick={()=>window.open('https://blog.naver.com/juseomkim')}/>
          </div>
        </div>
        <div className='nullDiv'/>
        <div className='mainContents26'>
            
            <div className='mainContentsMenuLayout26'>
              <div style={{maxWidth:'80%',backgroundColor:'#323232',aspectRatio:'auto 1/0.6',borderRadius:20,width:1000,padding:20,boxSizing:'border-box'}}>
                <img src={promotionalVideo1} alt='' onClick={()=>handleGoVimeo('1116678712')} style={{width:'100%',height:'100%',objectFit:'cover',}} />
              </div>
              
            </div>
        </div>
        
      

        <div className='bgImage26'>
          <div>
            <img src={bg01} alt=''/>
          </div>
          <div>
            <img src={bg02} alt=''/>
          </div>
        </div>
      </div>
 



       
    {/* <div className='bottomLayout'>
        <div className='bottomLayoutIn'>
          <img src={skGray} alt=''/>
          <div className='bottomText'>
            <div>(주)섬김</div>
            <div>대표 : 임영수  │  사업자등록번호 : 886-86-00204</div>
            <div>대표번호 1533-2473</div>
            <div>©2023 by (주)섬김 All Rights Reserved.</div>
          </div>
          <div className='bottomBtn'>
            <img src={instaLogo} alt='' onClick={()=>window.open('https://www.instagram.com/krrhangeul_official/')}/>
            <img src={youtubeLogo} alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} /> 
          </div>
        </div>
        
      </div>
    <img src={stars} alt='' className='stars' />
    <img src={circle} alt='' className='circle1'/>
    <img src={circle} alt='' className='circle2'/> */}
    
  </div>
  );
}

export default PromotionalVideo;
