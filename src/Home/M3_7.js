 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/7/mimg.png'

import bookVideo from './resource/7/m3video.png'
import book from './resource/step3mbook.png'
import video1 from './resource/7/m3_1.png'
import video2 from './resource/7/m3_2.png'
import video3 from './resource/7/m3_3.png'
import video4 from './resource/7/m3_4.png' 
import video5 from './resource/7/m3_5.png' 
import video6 from './resource/7/m3_6.png' 
import video7 from './resource/7/m3_7.png' 
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'

function M3_7() {
 
  const [bgColor,setBgColor] = useState('#f5993a')
  const [boxColor,setBoxColor] = useState('#ec6a1c')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/V0JP9F8fbJQ')
  const [issue,setIssue] = useState(7)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 빼기, 수직선 빼기, 숫자·그림 뺄셈 활동으로 연산 능력을 기르고, 사진·그림 속 공통점과 관계를 찾아 추리하는 활동으로 사고력을 높였어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju6011gLm_9htk4J9LaSCF_h')
  const linkList = [
    {page:2,link:'https://youtu.be/0J_18JZlYoQ',img:video1},
    {page:7,link:'https://youtu.be/V0JP9F8fbJQ',img:video2},
    {page:10,link:'https://youtu.be/4BAY_L3iY0w',img:video3},
    {page:12,link:'https://youtu.be/eA9IKkfgy90',img:video4},
    {page:12,link:'https://youtu.be/vLmAnJNK8tg',img:video5},
    {page:'노래',link:'https://youtu.be/NMK7MsBq0qs',img:video6},
    {page:'노래',link:'https://youtu.be/PaTVZWKAHmc',img:video7},
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
        3단계 {issue}호
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
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
            <img src={linkList[5].img} alt=''/> 
            <div>{linkList[5].page}</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}</div>
          </div>      
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
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
        </div>
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M3_7;
