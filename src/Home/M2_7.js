 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/7/mimg.png'

import bookVideo from './resource/7/m2video.png'
import book from './resource/step2mbook.png'
import video1 from './resource/7/m2_1.png'
import video2 from './resource/7/m2_2.png'
import video3 from './resource/7/m2_3.png'
import video4 from './resource/7/m2_4.png' 
import video5 from './resource/7/m2_5.png'
import video6 from './resource/7/m2_6.png' 
import video7 from './resource/7/m2_7.png' 
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'

function M2_7() {
 
  const [bgColor,setBgColor] = useState('#f5993a')
  const [boxColor,setBoxColor] = useState('#ec6a1c')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/iTex1N9C1fk')
  const [issue,setIssue] = useState(7)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 사물의 크기·양·순서를 비교하는 서열 활동을 하고, 1씩 증감하는 숫자 순서를 익혔어요. 또한, 숨은 그림 찾기와 동작 변별 활동으로 세밀하게 보는 힘을 키웠어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju4q4jMLi4om2YDLzuQcOb-m')
  const linkList = [
    {page:2,link:'https://youtu.be/iTex1N9C1fk',img:video1},
    {page:2,link:'https://youtu.be/9w0GiqgN3A0',img:video2},
    {page:7,link:'https://youtu.be/PWE6GI9fsGs',img:video3},
    {page:7,link:'https://youtu.be/tYiGiBjohSQ',img:video4},
    {page:11,link:'https://youtu.be/LOHWBDQOUH8',img:video5},
    {page:14,link:'https://youtu.be/rHuSWVjDxgU',img:video6},
    {page:14,link:'https://youtu.be/7s7gbpbUYfU',img:video7},
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
        <div className='contentsLinkTextHome'>영상 시청</div>
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

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>   

          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>    */}
        </div>

        <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
            <img src={linkList[4].img} alt=''/> 
            <div>{linkList[4].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
            <img src={linkList[5].img} alt=''/> 
            <div>{linkList[5].page}p</div>
          </div>   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>  
          {/* 

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>    */}
        </div>
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M2_7;
