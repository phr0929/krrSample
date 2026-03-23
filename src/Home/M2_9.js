 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/9/mimg.png'

import bookVideo from './resource/9/m2video.png'
import book from './resource/step2mbook.png'
import video1 from './resource/9/m2_1.png'
import video2 from './resource/9/m2_2.png'
import video3 from './resource/9/m2_3.png'
import video4 from './resource/9/m2_4.png' 
import video5 from './resource/9/m2_5.png' 
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'

function M2_9() {
 
  const [bgColor,setBgColor] = useState('#ffd46b')
  const [boxColor,setBoxColor] = useState('#ed9c36')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/jeg0sbskMus')
  const [issue,setIssue] = useState(9)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 손가락 놀이로 10의 보수 개념을 익혔어요. 연극배우 수 세기와 컵 쌓기 놀이로 덧셈 능력과 수 변별력을 키웠어요. 또 다른 그림 찾기와 변화 기계 활동으로 논리적 사고력을 길렀어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju7va7sh_rz2DPS_Ekl9Dnkj')
  const linkList = [
    {page:2,  link:'https://youtu.be/jeg0sbskMus',img:video1},
    {page:4,  link:'https://youtu.be/UG0zcjWIRfE',img:video2},
    {page:4,  link:'https://youtu.be/Rr2azZdRxtM',img:video3},
    {page:8,  link:'https://youtu.be/ugRrIASnDVU',img:video4},
    {page:11, link:'https://youtu.be/VIwCJjAj0s0',img:video5}, 
    // {page:13,link:'https://youtu.be/kDh2NaJSzRE',img:video5},
    // {page:16,link:'https://youtu.be/AjF_sRd3Q2I',img:video6},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:video7},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:video8}, 
   ]
   
  const handleGoLink=(link)=>{
    window.open(link)
  }

   
  return (
  <div className='mainCenterLayoutHome'>
    <div className='imgBoxHome'>
      {/* <div className='stepInfoHome' style={{border:'3px solid #7DCBF5'}}>한글 1단계 5호</div> */}
      <div className='contentsLinkBtnHome' style={{right:0}} onClick={()=>handleGoLink(playListLink)}>
        <div className='contentsLinkHome' style={{right:0}}>▶</div>
        <div className='contentsLinkTextHome' style={{color:'#fff'}}>영상 시청</div>
      </div>
      <img src={mimg} alt='' className='mainImgHome'/>
    </div>
    <div className='contentsBoxHome' style={{backgroundColor:bgColor}}>
      <div className='titleHome' style={{color:textColor}}>
        까르르수학 가정안내문<br/>
        2단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt=''className='bookImgHome'/>
          <img src={bookVideo}  onClick={()=>handleGoLink(bookVideoLink)} alt='' className='bookVideoImgHome'/>
        </div> 
        <div>
            {studyContetns}
        </div>   
      
      
      </div>

            
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        
        <div></div>
        <div>까르르한글수 APP</div>
        <div></div>
      </div>
      <div className='writeHangeulHome'> 
         
      
      <div className='downloadTitleHome'>⬇️ 까르르한글수 다운로드 링크</div>

        <div className='downloadBarHome'>
          <div className='downloadBtnHome'
              onClick={()=>window.open('https://apps.apple.com/kr/app/%EC%93%B0%EB%8A%94%ED%95%9C%EA%B8%80/id6633439192')}>
              <img src={appstore} alt=''/>
              <div>AppStore</div>
            </div>
          <div className='downloadBtnHome'
              onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.seomgim.korean&pcampaignid=web_share')}>
              <img src={playstore} alt=''/>
              <div>PlayStore</div>
          </div>
        </div> 
        <div className='admissionCodeHome'>
          <div className='admissionCodeTitleHome'>🔑 까르르한글수 가입 코드</div>
          <div>가입 코드는 각 원에 문의해 주세요.</div>
         
        </div>

         
      </div>

      
       <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        
        <div></div>
        <div>교재 연계 영상</div>
        <div></div>
      </div>
      <div className='videoBoxHome'> 
        <div style={{fontWeight:700}}>🎥 영상으로 이어지는 즐거운 학습</div>
        <div style={{marginTop:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[0].link)}>
            <img src={linkList[0].img} alt=''/> 
            <div>{linkList[0].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[1].link)}>
            <img src={linkList[1].img} alt=''/> 
            <div>{linkList[1].page}p</div>
          </div>   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[2].link)}>
            <img src={linkList[2].img} alt=''/> 
            <div>{linkList[2].page}p</div>            
          </div>  


          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>    */}
        </div>

      <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>   

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
            <img src={linkList[4].img} alt=''/> 
            <div>{linkList[4].page}p</div>
          </div>  
{/* 
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
            <img src={linkList[5].img} alt=''/> 
            <div>{linkList[5].page}p</div>
          </div>   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>  
          

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>    */}
        </div>

 
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M2_9;
