 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/10/mimg.png'

import bookVideo from './resource/10/m1video.png'
import book from './resource/step1mbook.png'
import video1 from './resource/10/m1_1.png'
import video2 from './resource/10/m1_2.png'
import video3 from './resource/10/m1_3.png'
import video4 from './resource/10/m1_4.png' 
import video5 from './resource/10/m1_5.png'
import video6 from './resource/10/m1_6.png'
import video7 from './resource/10/m1_7.png'
import video8 from './resource/10/m1_8.png' 
import video9 from './resource/10/m1_9.png' 
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'


function M1_10() {
 
  const [bgColor,setBgColor] = useState('#e9f3ff')
  const [boxColor,setBoxColor] = useState('#acc2e2')
  const [textColor,setTextColor] = useState('#294f5e')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/FARtkzTtEv8')
  const [issue,setIssue] = useState(10)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 시소 타기, 분리수거, 키 재기 활동 등을 통해 무게, 길이, 높이, 양을 비교하는 법을 배웠어요. 부등호와 등호 개념을 익히고, 두 조각 퍼즐을 맞추며 부분과 전체를 이해하는 힘을 길렀어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju5sJfFX-oSEWT0_LXdY9Neg')
  const linkList = [
    {page:2,     link:'https://youtu.be/FARtkzTtEv8',img:video1},
    {page:2,     link:'https://youtu.be/Yh2D1vfwpew',img:video2},
    {page:6,     link:'https://youtu.be/iVyoCCrRtNk',img:video3},
    {page:6,     link:'https://youtu.be/zCn2PicEfzI',img:video4},
    {page:9,     link:'https://youtu.be/jpCGn09V8KY',img:video5},
    {page:11,    link:'https://youtu.be/OBo8dAGg8c4',img:video6},
    {page:11,    link:'https://youtu.be/rnKpu3EzMDk',img:video7},
    {page:'노래',link:'https://youtu.be/QCZpWGdjLRc',img:video8},
    {page:'노래',link:'https://youtu.be/nv6yIKe7Tuo',img:video9}, 
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
        1단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt=''className='bookImgHome' style={{border:0}}/>
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
        </div>
  

        <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
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
        </div>

        <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}</div>
          </div>   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[8].link)}>
            <img src={linkList[8].img} alt=''/> 
            <div>{linkList[8].page}</div>
          </div>   
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M1_10;
