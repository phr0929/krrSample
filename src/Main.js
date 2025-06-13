import logo from './logo.svg';
import './App.css';
import krr from './resource/krr.png';
import hiup from './resource/hiup.png';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';
import krrStepOn0 from './resource/krrStep0.svg';
import krrStepOn1 from './resource/krrStep1.svg';
import krrStepOn2 from './resource/krrStep2.svg';
import krrStepOn3 from './resource/krrStep3.svg';
import eliivyStepOn0 from './resource/eliivyStep0.svg';
import eliivyStepOn1 from './resource/eliivyStep1.svg';
import eliivyStepOn2 from './resource/eliivyStep2.svg';
import eliivyStepOn3 from './resource/eliivyStep3.svg';
import pptOn from './resource/ic_ppt_on.svg';
import pptOff from './resource/ic_ppt_off.svg';
import workbookOn from './resource/ic_workbook_on.svg';
import workbookOff from './resource/ic_workbook_off.svg';
import gameOn from './resource/ic_game_on.svg';
import gameOff from './resource/ic_game_off.svg';  
import bg from './resource/bg.svg';
import stars from './resource/stars.svg';
import circle from './resource/circle.svg';
import krr5111 from './resource/thumbnail/5-1-1-1.jpg';
import krr5112 from './resource/thumbnail/5-1-1-2.jpg';
import krr5113 from './resource/thumbnail/5-1-1-3.jpg';
import krr5114 from './resource/thumbnail/5-1-1-4.jpg';
import krr5115 from './resource/thumbnail/5-1-1-5.jpg';
import krr5121 from './resource/thumbnail/5-1-2-1.jpg';
import krr5122 from './resource/thumbnail/5-1-2-2.jpg';
import krr5123 from './resource/thumbnail/5-1-2-3.jpg';
import krr5124 from './resource/thumbnail/5-1-2-4.jpg';
import krr5125 from './resource/thumbnail/5-1-2-5.jpg';
import krr5131 from './resource/thumbnail/5-1-3-2.jpg';
import krr5132 from './resource/thumbnail/5-1-3-1.jpg';
import krr5133 from './resource/thumbnail/5-1-3-3.jpg';
import krr5134 from './resource/thumbnail/5-1-3-4.jpg';
import krr5135 from './resource/thumbnail/5-1-3-5.jpg';
import krr5141 from './resource/thumbnail/5-1-4-1.jpg';
import krr5142 from './resource/thumbnail/5-1-4-2.jpg';
import krr5143 from './resource/thumbnail/5-1-4-3.jpg';
import krr5144 from './resource/thumbnail/5-1-4-4.jpg';
import krr5145 from './resource/thumbnail/5-1-4-5.jpg';
import krrLogo from './resource/krr logo.svg';
import hanLogo from './resource/han logo.svg';
import mathLogo from './resource/math logo.svg';
import zemboLogo from './resource/zembo logo.svg';
import krrImg from './resource/krrImg.jpg';
import luluImg from './resource/luluImg.jpg';
import eliivyImg from './resource/eliivyImg.jpg';
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css'
import instaLogo from './resource/instaLogo.svg';
import youtubeLogo from './resource/youtubeLogo.svg';
import blogLogo from './resource/blogLogo.svg';
import testWorkbook1 from './resource/test1.png';
import testWorkbook2 from './resource/test2.png';
import testWorkbook3 from './resource/test3.png'; 
import character from './resource/character.mp4';
import luluCharacter from './resource/luluCharacter.mp4';
// import character from './resource/character.gif';
// import luluCharacter from './resource/lulucharacter.gif';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react" 
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel } from "swiper"
import "swiper/css"

SwiperCore.use([Autoplay])
SwiperCore.use([Mousewheel])
 
function Main() {

  const navigate = useNavigate()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
 
  const location = useLocation();
  const stepIdx = location?.state?.idx!==undefined?location?.state?.idx:1;
  const [isHovering, setIsHovering] = useState(2);
  const [scrollDown,setScrollDown] = useState(true); 
  const [scrollY,setScrollY] = useState(0);
  const [dialog,setDialog] = useState(false);
  const [dialogTitle,setDialogTitle] = useState('');
  const [dialogImg,setDialogImg] = useState(null);
  const [step,setStep] = useState(stepIdx)  

  const [ctgr,setCtgr] = useState(0)
  // 1학기 -> 0
  // 7호 -> 70
  // 8호 -> 80
  // 잼보 -> 100
  
  const [pageWidth,setPageWidth] = useState('')
  const [swiper,setSwiper] = useState(false);
  const [pageNumber,setPageNumber] = useState(0);

  const handleDialog=(title,img)=>{
    setDialog(true);
    setDialogTitle(title);
    setDialogImg(img)
  }

  

  window.addEventListener('scroll', (e) => {
    

    if(window.scrollY>scrollY){
      setScrollDown(false) 
      setScrollY(window.scrollY)
    }else{ 
      // setScrollDown(true) 
      // setScrollY(window.scrollY)
    }
    
  
  });

  const handleMenuMousOver = (idx) => {
    setScrollDown(true)
    setIsHovering(idx)
  }
    
  const handleStepChange = (idx,link) => {
    setStep(idx)
    window.scrollTo(0,0)
    setScrollY(0)
    navigate(link, {state:{idx:idx}})
  }

  const handleMouseOut = (idx) => {
    
    if(scrollY>=90){
      setScrollDown(false)
    }

    setIsHovering(idx)
  }

  const handleGoVimeo = (link) => {
    window.open('https://vimeo.com/'+link,"_top")
  }

  const handleGame = (code) => {
    window.open(code,'pop')
  }

  const handleCtgrCk = (idx) => {
    if(idx<=100){
      setCtgr(idx)
    }else{
      setCtgr(100)
    }

    window.scrollTo(0,0)  
    setScrollY(0)
  }

  useEffect(() => {
    if(dialog){

      document.body.style= `overflow: hidden`;
      return () => document.body.style = `overflow: auto`
    }
  }, [dialog])
   
  return (
    <div className='mainLayout'>
    <div className='menuBar'>
      <div className='menuBarIn'>

        <img className='logoImg' onClick={()=>navigate('../')} src={sk} alt='' style={{cursor:'auto'}}/>
 
        <div className='menuBarMenu'> 
 
          <div className='goSkBtn goSkKrr' onClick={()=>window.open('http://www.edujusk.kr')}>섬김 사이트</div>
        </div>
      </div>

      
    </div> 

    <div className='mainCenterLayout'>

      
      {/* <div className='mainCenterLayoutIn'> */}

    
      <Swiper  
        onSwiper={setSwiper}
        modules={[Navigation, Pagination]} 
        className='mainCenterLayoutIn'
        style={{zIndex:100,position:'relative'}}
        slidesPerView={1.5}
        breakpoints={{
          1025:{
            slidesPerView:3,
            centeredSlides:false,
          },}
          
        } 
        spaceBetween={0} 
        centeredSlides={true} 
        initialSlide={1}
        
        observer={true}
        observeParents={true}
        > 
            
        <SwiperSlide>
          <div className='mainContentsLayout' onClick={()=>navigate('./Lulu')} >
            <img src={luluImg} alt=''/>
            <div className='mainContentsTitle'>안녕! 룰루</div>
            <div className='mainContents'>즐겁게 배우는<br/>4세 글놀이 수놀이</div>
            <div className='mainContentsBtn'  style={{backgroundColor:'#e63d90'}}>
              {'컨텐츠 보러가기 >'}
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
        
          <div className='mainContentsLayout'   onClick={()=>navigate('./Krr')}   >
            <img src={krrImg} alt=''/>
            <div className='mainContentsTitle'>까르르한글수</div>
            <div className='mainContents'>놀이하면서 습득해가는<br/>놀라운 한글 수학세상!</div>
            <div className='mainContentsBtn' style={{backgroundColor:'#fabe00'}}>
              {'컨텐츠 보러가기 >'}
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className='mainContentsLayout'   onClick={()=>navigate('./ElliIvy')}>
            <img src={eliivyImg} alt=''/>
            <div className='mainContentsTitle'>ElliIvy English</div>
            <div className='mainContents'>즐기면서 익히는<br/>신나는 영어세상!</div>
            <div className='mainContentsBtn' style={{backgroundColor:'#29b5b2'}}>
              {'컨텐츠 보러가기 >'}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

     
        {/* <div className='mainContentsLayout' onClick={()=>navigate('./Lulu')} >
              <img src={luluImg} alt=''/>
              <div className='mainContentsTitle'>안녕! 룰루</div>
              <div className='mainContents'>노래하고, 춤추고! 즐겁게 배우는<br/>4세 글놀이 수놀이</div>
              <div className='mainContentsBtn'  style={{backgroundColor:'#e63d90'}}>
                {'컨텐츠 보러가기 >'}
              </div>
            </div> 
        <div className='mainContentsLayout'   onClick={()=>navigate('./Krr')}   >
          <img src={krrImg} alt=''/>
          <div className='mainContentsTitle'>까르르한글수</div>
          <div className='mainContents'>놀이하면서 쉽고 빠르게 습득해가는<br/>놀라운 한글 수학세상!</div>
          <div className='mainContentsBtn' style={{backgroundColor:'#fabe00'}}>
            {'컨텐츠 보러가기 >'}
          </div>
        </div> 
        <div className='mainContentsLayout'   onClick={()=>navigate('./EliIvy')}>
          <img src={eliivyImg} alt=''/>
          <div className='mainContentsTitle'>Eliivy English</div>
          <div className='mainContents'>즐기면서 익히는<br/>신나는 영어세상!</div>
          <div className='mainContentsBtn' style={{backgroundColor:'#29b5b2'}}>
            {'컨텐츠 보러가기 >'}
          </div>
        </div> */}
      {/* </div> */}

     
    </div>
    <div className='bottomLayout'>
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
            {/* <img src={blogLogo} alt='' /> */}
          </div>
        </div>
        
      </div>
    <img src={stars} alt='' className='stars' />
    <img src={circle} alt='' className='circle1'/>
    <img src={circle} alt='' className='circle2'/>
    
  </div>
  );
}

export default Main;
