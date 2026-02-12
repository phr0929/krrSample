 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/1/mimg.png'

import bookVideo from './resource/1/m1video.png'
import book from './resource/step1mbook.png'
import video1 from './resource/1/m1_1.png'
import video2 from './resource/1/m1_2.png'
import video3 from './resource/1/m1_3.png'
import video4 from './resource/1/m1_4.png' 
import video5 from './resource/1/m1_5.png'
import video6 from './resource/1/m1_6.png' 
import video7 from './resource/1/m1_7.png'  

function M1_1() {
 
  const [bgColor,setBgColor] = useState('#8ad05c')
  const [boxColor,setBoxColor] = useState('#62ba51')
  const [textColor,setTextColor] = useState('#fffbcf')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/9hyq7t0buIc')
  const [issue,setIssue] = useState(1)
  const [studyContetns,setStudyContetns] = useState(`이번 수학 시간에는 색깔, 모양, 장소, 직업 등 단순한 기준에 따라 대상을 나누는 '단순 분류' 활동을 했어요. 점선 따라 그리기와 다양한 선 긋기 활동을 통해 눈과 손의 협응력을 기르고 시지각 능력을 발달시켰어요.`)
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju71cVJKvyTrAYLyeMZZ5k2c')
  const linkList = [
    {page:2, link:'https://youtu.be/9hyq7t0buIc',img:video1},
    {page:2, link:'https://youtu.be/vpovoS-GQPY',img:video2},
    {page:4, link:'https://youtu.be/zEIT67J5ibc',img:video3},
    {page:4, link:'https://youtu.be/_bzP1UFIF_4',img:video4},
    {page:5, link:'https://youtu.be/sTBUsde-Hxw',img:video5},
    {page:15,link:'https://youtu.be/y7DOpfMKHDs',img:video6},
    {page:15,link:'https://youtu.be/H2CwbG64yVc',img:video7},
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
  

        <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
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
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M1_1;
