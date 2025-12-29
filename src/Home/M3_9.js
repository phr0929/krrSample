 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/9/mimg.png'

import bookVideo from './resource/9/m3video.png'
import book from './resource/step3mbook.png'
import video1 from './resource/9/m3_1.png'
import video2 from './resource/9/m3_2.png'
import video3 from './resource/9/m3_3.png'
import video4 from './resource/9/m3_4.png' 
import video5 from './resource/9/m3_5.png' 
import video6 from './resource/9/m3_6.png'
import video7 from './resource/9/m3_7.png' 
import video8 from './resource/9/m3_8.png'

function M3_9() {
 
  const [bgColor,setBgColor] = useState('#ffd46b')
  const [boxColor,setBoxColor] = useState('#ed9c36')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/uYNietxaLtM')
  const [issue,setIssue] = useState(9)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 파랑점과 빨강점을 활용해 5~7의 덧셈과 뺄셈 개념을 익혔어요. 도형 블록으로 연산 과정을 표현하며 연산력을 익혔어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju7DPudyoiX_P893fiLvSi4B')
  const linkList = [
    {page:2,     link:'https://youtu.be/uYNietxaLtM',img:video1},
    {page:2,     link:'https://youtu.be/bs95_QdfkGI',img:video2},
    {page:2,     link:'https://youtu.be/RKE0IRSELrc',img:video3},
    {page:6,     link:'https://youtu.be/-WOTHiIvjUQ',img:video4},
    {page:6,     link:'https://youtu.be/fgpCz9bK2eo',img:video5}, 
    {page:6,     link:'https://youtu.be/PCo1Z6c_nyU',img:video6},
    {page:13,    link:'https://youtu.be/D9XLAtywZpk',img:video7}, 
    {page:'노래',link:'https://youtu.be/aM9Yu8c8KHY',img:video8},
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

           
        </div>

    
         <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>  
            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
              <img src={linkList[4].img} alt=''/> 
              <div>{linkList[4].page}p</div>
            </div>  

            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
              <img src={linkList[5].img} alt=''/> 
              <div>{linkList[5].page}p</div>
            </div>    
        </div>

        <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}</div>
          </div>  
 
        </div>
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M3_9;
