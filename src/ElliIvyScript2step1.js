import logo from './logo.svg';
import './App.css';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css' 
import './script.css'
import krrStepOn1 from './resource/krrScriptStep1.svg';
import krrStepOn2 from './resource/krrScriptStep2.svg';
import krrStepOn3 from './resource/krrScriptStep3.svg';
import eliivyStepOn1 from './resource/eliivyStep1.svg';
import eliivyStepOn2 from './resource/eliivyStep2.svg';
import eliivyStepOn3 from './resource/eliivyStep3.svg';
import e11 from './resource/script/e11.png';
import e12 from './resource/script/e12.png';
import e13 from './resource/script/e13.png';
import e21 from './resource/script/e21.png';
import e22 from './resource/script/e22.png';
import e23 from './resource/script/e23.png';
import e31 from './resource/script/e31.png';
import e32 from './resource/script/e32.png';
import e33 from './resource/script/e33.png';
import { Swiper, SwiperSlide } from "swiper/react" 
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel } from "swiper"
import "swiper/css"

SwiperCore.use([Autoplay])
SwiperCore.use([Mousewheel])


function ElliIvyScript2step1() {
  
  
  const navigate = useNavigate();   
   
  const [swiper,setSwiper] = useState(false);
  const [pageNumber,setPageNumber] = useState(0);
  const scrollMotionLayout = document.querySelector(".scrollMotionLayout");

  return (
    <div className='mainLayout'>
      
    <div className='scrollMotionLayout' onTouchStart={()=>scrollMotionLayout.style.display="none"} onClick={()=>scrollMotionLayout.style.display="none"}>
      <div className='scrollMotion'>
        <div className='scroll1'>{'>'}</div>
        <div className='scroll2'>{'>'}</div>
        <div className='scroll3'>{'>'}</div>
      </div>

      <div style={{width:'100%',textAlign:'center',marginTop:20,fontSize:16,lineHeight:1.3,}}>
        오른쪽으로 드래그 하면<br/>
        다음장을 보실 수 있습니다.
      </div>
      
    </div>


      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' src={sk} alt='' style={{cursor:'auto'}} />

        
          <div className='navMenuBar'>
            <div className='navTitleKrr' style={{marginRight:0}}>
              까르르 스피치 2호 대본
            </div>
            
            {/* <div className='navMenu bgYellow' onClick={()=>setNavDialog(true)}>
              <div className='navLine'></div>
              <div className='navLine'></div>
              <div className='navLine'></div>
            </div> */}
          </div>
        </div>
      </div> 

     <Swiper  
        onSwiper={setSwiper}
        modules={[Navigation, Pagination]} 
        className='scriptSwiperMain'
        style={{zIndex:100,position:'relative'}}
        slidesPerView={1}        
        spaceBetween={0} 
        centeredSlides={true} 
        initialSlide={pageNumber}        
        observer={true}
        observeParents={true}
        onSlideChange={(e) =>  
          setPageNumber(e.realIndex)
      }> 
            
        <SwiperSlide>
          <div className='scriptPage'>
            <img src={e11} className='scriptImg' alt=''/>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <div className='scriptPage'>
            <img src={e12} className='scriptImg' alt=''/> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='scriptPage'>
            <img src={e13} className='scriptImg' alt=''/> 
          </div>
        </SwiperSlide>
      </Swiper>

      <div style={{width:'100%',height:50,boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,position:'fixed',bottom:0,zIndex:999}}>
              {pageNumber+1} / 3
            </div>
    </div>

  
  );
}

export default ElliIvyScript2step1;
